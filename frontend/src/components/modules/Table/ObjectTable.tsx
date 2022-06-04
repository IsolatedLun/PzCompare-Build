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
  const [obj, setObj] = useState(props.object);
  return (
    <div className="[ flex-direction-column ] [ gap-2 ]">
      <ObjectTableHeader name={props.object.DisplayName} avgPct={45} />

      <table id={`object-table-${props.idx}`} 
        className='[ object-table ] [ width-100 ]' 
        data-dir={props.direction}>
          <thead>
              <td>Name</td>
              <td>Value</td>
              <td>Pct</td>
          </thead>
          {
            Object.entries(props.object).map(([key, value]) => (
              <TableRow keyName={key} value={value} pct={objGet(props.diffs, `x.${key}`, undefined)} />
            ))
          }
      </table>
    </div>
  )
}

export default ObjectTable;