import { useEffect, useState } from 'react';

type Filter = {
  filterName: string,
  condition: Function

}


export default function useCompositeFilter<T>(baseData: T[]) {

  const [filters, setFilters] = useState<Filter[]>([])
  const [filteredData, setFilteredData] = useState<T[] | null>(null)

  function addFilter(filterName: string, condition: Function) {

    setFilters([...filters, { filterName: filterName, condition: condition }])

    console.log("Added Filter", [...filters, { filterName: filterName, condition: condition }])

  }

  function removeFilter(filterName: string) {

    const match = filters.filter((o) => o.filterName != filterName)

    console.log("Removed filter testta her", match)
    setFilters(match)

  }



  useEffect(() => {
    
    console.log("filters aktiv:", filters)


    // Settil til orginal data om ingen aktive filtere
    if(filters.length === 0) { setFilteredData(baseData); return;}

    const filterResult = baseData.filter((o) => {

      return (
        filters.every((f) => {
          console.log(f)
          return f.condition(o)
        })
      )


    })

    setFilteredData(filterResult);
    console.log("debug: resultat",filterResult)




  }, [filters])


  function applyFilters<T>(dataSet: T[]) {


  }


  return { filteredData: filteredData, addFilter: addFilter, removeFilter: removeFilter, applyFilters }


}