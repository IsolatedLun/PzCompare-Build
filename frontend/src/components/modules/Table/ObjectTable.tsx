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

  if(obj)
    return (
      <div className="[ flex-direction-column ] [ gap-2 ]">
        <ObjectTableHeader name={obj.object.DisplayName} avgPct={-90} />

        <table id={`object-table-${props.idx}`} 
          className='[ object-table ] [ width-100 ]' 
          data-dir={props.direction}>
            <thead>
                <td>Name</td>
                <td>Value</td>
                <td>Pct</td>
            </thead>
            {
              Object.entries(obj.object).map(([key, value]) => (
                <TableRow keyName={key} value={value} pct={objGet(obj.diffs, `x.${key}`, undefined)} />
              ))
            }
        </table>
      </div>
    )
  return <h2 data-desktop>No Data.</h2>
}

export default ObjectTable;