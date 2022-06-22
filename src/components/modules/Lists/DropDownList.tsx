import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_DropdownList } from './types'

const DropDownList = (props: Props_DropdownList) => {
    const _props = prepareProps(props, 
        {   blockClass: 'list', 
            compostClass: 'flex-direction-column', 
            utilClass: 'padding-block-1 gap-1 padding-inline-2' 
        });

  return (
    <ul 
        id={props.id}
        className={createCubeCSSClass(_props)} 
        data-variant={_props.variant} 
        data-dropdown-state={false}>
        {
            props.children
        }
    </ul>
  )
}

export default DropDownList