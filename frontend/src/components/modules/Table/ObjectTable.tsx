import { useState } from "react";
import { objGet } from "../../../utils/funcs";
import ObjectTableHeader from "./ObjectTableHeader";
import { Props_ObjectTable, Props_TableRow } from "./types";

const TableRow = (props: Props_TableRow) => {
  return (
    <tr>
      <td>{ props.keyName }</td>
      <td>{ props.value }</td>
      {
        props.pct 
        ? <td data-percent={props.pct !== null}>{ props.pct }%</td> 
        : <td data-percent='-1'>-</td>
      }
    </tr>
  )
}

const ObjectTable = (props: Props_ObjectTable) => {
  const [obj, setObj] = useState(props.data);

  if(obj && obj?.object.length > 0)
    return (
      <div className="[ flex-direction-column ] [ gap-2 ]">
        <ObjectTableHeader name={''} avgPct={-90} />

        <table id={`object-table-${props.idx}`} 
          className='[ object-table ] [ width-100 ]' 
          data-dir={props.direction}>
            <thead>
                <td>Name</td>
                <td>Value</td>
                <td>Pct</td>
            </thead>
            {
              Object.entries(obj.object).map(([_, [key, val]]) => (
                <TableRow 
                  keyName={key} 
                  value={val} 
                  pct={objGet(obj.diffs, `x.${key}`, undefined)} />
              ))
            }
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