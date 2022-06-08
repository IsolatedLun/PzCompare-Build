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
      <tr>
        <td className='[ dir-ltr ]'><TruncatedText text={props.keyName as any} maxLen={18} /></td>
        <td className='[ dir-ltr ]'>
          <TruncatedText text={props.value as any} maxLen={16} />
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
        <ObjectTableHeader name={props.objectName} avgPct={props.data.avgPct} />

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