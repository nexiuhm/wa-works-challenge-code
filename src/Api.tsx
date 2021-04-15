/*


type searchRequest = {
    s: string;
    type?: "movie" | "series" | "episode";
    y?: number;

}

*/

const API_KEY = "48c3ab98";



export default async function getMovieBySearch(searchQuery:String) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchQuery}`)
    const json = await res.json();

    return json;

}


