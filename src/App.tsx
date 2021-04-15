/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React from 'react';
import SortTable from "./components/SortTable";
import useCompositeFilter from "./hooks/CompositeFilter";
import Dropdown from "./components/DropdownFilter"
import './App.css';
import getMovieBySearch from './Api';
import Popup from "./components/Popup"
import MovieDetails from "./components/MovieDetails"
import BlurContainer from "./components/blurContainer"
import { bodyBase,appBase } from './styles/Styles';


const spaceThemedMovies = ["interstellar", "alien", "2001: A Space Odyssey", "Gravity", "Star Wars", "Europa Report", "Moon", "Sunshine", "Apollo 13", "Contact", "The Martian", "Event Horizon", "Elysium", "Avatar", "Pitch Black"];



export type MovieData = {
  Title: string,
  Year: string,
  Metascore: string,
  imdbRating: number,
  Runtime: string,
  Poster: string,
  Plot: string,
}



export default function App() {

  /* Init */
  const [movieData, setMovieData] = React.useState<MovieData[]>([]);
  const [filteredMovies, setFilteredMovies] = React.useState<MovieData[] | null>([]);
  const {filteredData, addFilter, removeFilter} = useCompositeFilter<MovieData>(movieData)
  const [selectedMovie, setSelectedMovie] = React.useState<MovieData>()



  React.useEffect(() => {

    spaceThemedMovies.forEach((title: string) => {
      getMovieBySearch(title).then(({ Title, Year, Metascore, Rated, Runtime, Poster, Plot, imdbRating }) => {
        setMovieData((movieData) => [...movieData, { Title: Title, Year: Year, Metascore: Metascore, imdbRating: imdbRating, Runtime: Runtime, Poster: Poster, Plot: Plot }])
      })

    })

  }, [])

  React.useEffect(() => {
    setFilteredMovies(filteredData);
  }, [filteredData])


  React.useEffect(() => {
    setFilteredMovies(movieData)
  }, [movieData])


  return (
    <div className="App"> 
     
      <BlurContainer blur={selectedMovie ? true : false}>


        <h1>SPACE THEMED MOVIES</h1>


        { /* ---- Dropdown   --------------------------------------------------- */}
        <Dropdown>
          <div>
            <label><input type="checkbox" onChange={(e)=>e.target.checked ? addFilter("<year2k", (m: MovieData) => parseInt(m.Year) < 2000) : removeFilter("<year2k")} /> Before year 2000</label>
            <label><input type="checkbox" onChange={(e)=>e.target.checked ? addFilter(">7.7imdb", (m: MovieData) => m.imdbRating > 7.5) : removeFilter(">7.7imdb")} /> High rated imdb</label>

          </div>
        </Dropdown>

        { /* ---- Tabell ------------------------------- */}

        {filteredMovies &&
          <SortTable
            onItemSelected={(movie: MovieData) => { setSelectedMovie(movie) }}
            columnLabels={["Title", "Year", "Metascore", "imdbRating", "Runtime"]}
            data={filteredMovies}
          />}

      </BlurContainer>



      { /* ----- Popup----------------------------------------  */}

      {selectedMovie &&
        <Popup onClose={() => { setSelectedMovie(undefined); }} visible={selectedMovie ? true : false}>
          <MovieDetails movie={selectedMovie}></MovieDetails>
        </Popup>}

    </div>
  );
}
