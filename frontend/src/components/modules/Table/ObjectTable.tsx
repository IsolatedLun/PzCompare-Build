import { useState } from "react";
import { objGet } from "../../../utils/funcs";
import ObjectTableHeader from "./ObjectTableHeader";
import { Props_ObjectTable, Props_TableRow } from "./types";

const TableRow = (props: Props_TableRow) => {
  return (
    <tr>
      <td>{ props.keyName }</td>
      <td className='[ dir-ltr ]'>
        { props.value }
      </td>
      {
        props.pct 
        ? <td data-percent={props.pct !== null}>{ props.pct }%</td> 
        : <td data-percent='-1'>-</td>
      }
    </tr>
  )
}

const ObjectTable = (props: Props_ObjectTable) => {
  if(props.data && props.data.object.length > 0)
    return (
      <div 
        id={`object-table-${props.idx}`} 
        className="[ flex-direction-column ] [ gap-2 width-100vw ]">
        <ObjectTableHeader name={props.objectName} avgPct={0} />

        <table
          className='[ object-table ] [ text-center width-100vw ]' 
          data-dir={props.direction}>
            <thead>
                <td>Name</td>
                <td>Value</td>
                <td>Pct</td>
            </thead>
            <tbody>
              {
                Object.entries(props.data.object).map(([_, [key, val]]) => (
                  <TableRow 
                    keyName={key} 
                    value={val} 
                    pct={objGet(props.data.diffs, `x.${key}`, undefined)} />
                ))
              }
            </tbody>
        </table>
      </div>
    )
  return (
    <div className="[ flex-direction-column gap-1 ]">
      <h2 data-desktop>No Object.</h2>
      <p className="[ text-muted ]">Try searching something! ({ props.randomName })</p>
    </div>
  )
}

export default ObjectTable;