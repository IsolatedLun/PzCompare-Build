import { useEffect, useState } from "react";
import { objGet } from "../../../utils/funcs";
import TruncatedText from "../Text/TruncatedText";
import ObjectTableHeader from "./ObjectTableHeader";
import EvolvedRecipeRow from "./TableRows/EvolvedRecipeRow";
import { Props_ObjectTable, Props_TableRow } from "./types";

const TableRow = (props: Props_TableRow) => {
  if(props.keyName === 'EvolvedRecipe')
    return <EvolvedRecipeRow { ...props } />
    
  else
    return (
      <tr className="[ dir-ltr ]">
        <td className="[ text-elliptic ]" title={props.keyName as string}>
          { props.keyName }
        </td>
        <td className="[ text-elliptic ]" title={props.value as string}>
          { props.value }
        </td>
        {
          props.pct 
          ? <td data-percent={props.pct > 0}>{ props.pct }%</td> 
          : <td data-percent='-1'>-</td>
        }
      </tr>
    )
}

const ObjectTable = (props: Props_ObjectTable) => {
  const [obj, setObj] = useState(props.data);

  useEffect(() => {
    setObj(props.data)
  }, [props.data])

  if(obj && obj.object !== undefined && Object.keys(obj.object).length > 0)
    return (
      <div 
        id={`object-table-${props.idx}`} 
        className="[ flex-direction-column ] [ gap-2 width-100vw ]">
        <ObjectTableHeader name={props.objectName} avgPct={props.data.avgPct} />

        <table
          className='[ object-table ] [ text-center width-100vw ]' 
          data-dir={props.direction}>
            <thead> 
              <tr>
                <td>Name</td>
                <td>Value</td>
                <td>Pct</td>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(obj.object).map((key, index) => {
                  if(props.onlyShowDiffs && obj.diffs[key])
                    return <TableRow 
                            keyName={key} 
                            value={props.data.object[key]} 
                            pct={objGet(obj.diffs, `x.${key}`, undefined)}
                            key={index} />
                  else if (!props.onlyShowDiffs)
                    return <TableRow 
                              keyName={key} 
                              value={props.data.object[key]} 
                              pct={objGet(obj.diffs, `x.${key}`, undefined)}
                              key={index} />
                })
              }
            </tbody>
        </table>
      </div>
    )
  return (
    <div className="[ flex-direction-column gap-1 ]">
      <h2 data-desktop>No Object.</h2>
      <p className="[ text-muted ]">
        Try searching something! 
        { props.randomName && `(${props.randomName})` }
      </p>
    </div>
  )
}

export default ObjectTable;