import { useState } from "react";
import { objGet } from "../../../utils/funcs";
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
    <table className='[ object-table ]' data-dir={props.direction}>
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
  )
}

export default ObjectTable;