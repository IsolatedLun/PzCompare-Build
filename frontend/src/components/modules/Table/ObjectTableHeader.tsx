import { CARET_UP } from '../../../consts'
import Percent from '../Percent/Percent'
import { Props_ObjectTableHeader } from './types'

const ObjectTableHeader = (props: Props_ObjectTableHeader) => {
  return (
    <header className="[ flex justify-content-space-between align-items-center ] [ width-100 ]">
        <h3>{ props.name }</h3>
        <Percent pct={props.avgPct} />
    </header>
  )
}

export default ObjectTableHeader