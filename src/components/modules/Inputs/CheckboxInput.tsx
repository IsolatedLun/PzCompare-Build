import React from 'react'
import { CHECK_ICON } from '../../../consts'
import { Props_CheckboxInput } from './types'
import Icon from '../Icons/Icon';

const CheckboxInput = (props: Props_CheckboxInput) => {
  return (
    <div className="input-container">
      <button 
        className='[ input-checkbox ] [ card flex align-items-center gap-2 ] 
            [ padding-inline-2 padding-block-1 border-radius-cubed margin-inline-auto cursor-pointer ]' 
        onClick={(e: any) => props.onInteract ? props.onInteract(e) : null}>

        <Icon 
            blockClass='checkbox__icon' 
            utilClass='border-radius-100'
            variant={props.value}
            ariaLabel=''>{ CHECK_ICON }</Icon>

        <p>{ props.text }</p>
      </button>
    </div>
  )
}

export default CheckboxInput