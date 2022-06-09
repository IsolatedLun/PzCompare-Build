import React from 'react'
import { createCubeCSSClass, hasTypeof, propOrDefault } from '../../../utils/funcs'
import { Props_Input } from './types'

const TextInput = (props: Props_Input<string>) => {
  return (
    <div className='[ pos-relative ]'>
      <input 
        onInput={(e) => props.onInteract ? props.onInteract(e) : null}
        placeholder={propOrDefault(props.placeholder, '')} 
        value={props.value}
        className={createCubeCSSClass({ ...props, blockClass: 'input' })} type="text" 
      />

{
          (props.onClearInput && 
            hasTypeof(props.value, ['string', 'number']) && 
            props.value.length > 0 
          ) &&
          (
            <button
              onClick={() => props.onClearInput!()}
              className='[ input__clear-button ] [  ] [ fw-bold pos-absolute ]' 
              data-variant='empty'>
              { 'X' }
          </button>
          )
        }
    </div>
  )
}

export default TextInput