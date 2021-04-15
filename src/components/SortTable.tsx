
import { useState, useEffect } from "react";

import { css, cx } from '@emotion/css'


type Props<T, K> = {
  data: T[];
  columnLabels: K[];
  className?: string;
  onItemSelected?: Function | null;
  //tableHeadData: {label:String, sortKey:String}[];

}

type sortState<K> = {
  sortColumn: K,
  ascending: boolean

}

/* Todo : move to some kind of util/helper functions file */
function sortArrayByKey<T, K extends keyof T>(array: T[], key: K, ascending: boolean): any[] {


  console.log(array, key, ascending)
  const sortedArray = [...array].sort((a, b) => {
    return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0
  });

  console.log(sortedArray)

  return ascending ? sortedArray : sortedArray.reverse(); // probably not optimal

}



export default function SortTable<T, K extends keyof T>({ data, columnLabels, onItemSelected = null }: Props<T, K>) {



  const [sortState, setSortState] = useState<sortState<K>>({ sortColumn: columnLabels[0], ascending: true })
  const [_data, setData] = useState(data)



  /* When internal sort state or data prop is updated, sort movies */

  useEffect(() => {

    setData(sortArrayByKey(data, sortState.sortColumn, sortState.ascending))

    console.log(data)
  }, [sortState, data])


  /* Reverse sort direction if same colulmn is selected twice, otherwise sort the new column ascending */
  const updateSortState = (column: K) => column === sortState.sortColumn ? setSortState({ sortColumn: column, ascending: !sortState.ascending }) : setSortState({ sortColumn: column, ascending: true })






  const renderTableRow = (item: T) =>

    <tr onClick={() => (onItemSelected && onItemSelected(item))}>
      {columnLabels.map((key) => <td> {item[key]} </td>)}
    </tr>

  const renderTabelHead = (label: K) =>

    <td onClick={() => updateSortState(label)}>
      {label}
    </td>




  return (

    /* todo move styling */

    <table className={css`
        padding: 10px;
        background: linear-gradient(90deg, rgba(121,62,224,0.7) 0%, rgba(62,121,227,0.3) 52%, rgba(38,96,201,0.7) 83%);
        font-size: 24px;
        border-radius: 4px;
        width: 100%;
        user-select: none;
        
        color: white;
        border: 0;
     
        
        
        font-size: 12px;
        border-collapse: collapse; 
        box-sizing: border-box;
        
        tr:hover {
          background: rgba(121,62,224,0.4598214285714286);
          
          box-shadow: 0 0 0 1px #999999;
          transform: scale(1.01);
         

         
          
        }

        tr {
          height: 20px;
          min-height: 20px;
          max-height: 20px;
          box-sizing: border-box;
          overflow:hidden;
         
         
          
         
        }

        td {
          padding: 20px;
          width: 100px;
          max-width: 100px;
          min-width: 100px;
          box-sizing: border-box;
          
        }
      `}>

      <thead>
        <tr>
          {columnLabels.map((label) => renderTabelHead(label))}
        </tr>
      </thead>

      <tbody>
        {_data.map((item) => renderTableRow(item))}
      </tbody>

    </table>

  )

}