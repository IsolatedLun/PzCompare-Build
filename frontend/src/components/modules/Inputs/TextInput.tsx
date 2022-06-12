import React from 'react'
import { TIMES_ICON } from '../../../consts'
import { createCubeCSSClass, hasTypeof, propOrDefault } from '../../../utils/funcs'
import Button from '../Buttons/Button'
import Icon from '../Icons/Icon'
import { Props_Input } from './types'

const TextInput = (props: Props_Input<string>) => {
  return (
    <div className='[ input-container ]'>
      {
        props.label && 
          <label 
            htmlFor={`${props.label}-${props.type}`}
            className='[ display-block margin-block-end-1 ]'>
            { props.label }
          </label>
      }
      <div className='[ container__inner ] [ pos-relative ]'>
        <input 
          id={`${props.label}-${props.type}`}
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
              <Button
                onInteract={() => props.onClearInput!()} 
                compostClass='[ input__clear-button ]'
                utilClass='fw-bold pos-absolute border-radius-cubed pos-absolute'
                secondaryVariant='tight'
                >
                <Icon 
                  blockClass='input__clear-button' 
                  utilClass='fs-300 border-radius-cubed cursor-pointer'
                  ariaLabel={`Clear ${props.value} text`}>{ TIMES_ICON }</Icon>
              </Button>
            )
          }
      </div>
    </div>
  )
}

export default TextInput