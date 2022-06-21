import { TIMES_ICON } from '../../../consts'
import { createCubeCSSClass, hasTypeof, prepareProps, propOrDefault } from '../../../utils/funcs'
import Button from '../Buttons/Button'
import Icon from '../Icons/Icon'
import { Props_Input } from './types'

const TextInput = (props: Props_Input<string>) => {
  const _props = prepareProps(props); 

  return (
    <div className='[ input-container ]'>
      {
        props.label &&
          <label 
            data-sr={propOrDefault(_props.hideLabel, false)}
            htmlFor={`${_props.label}-${_props.type}`}
            className='[ display-block margin-block-end-1 ]'>
            { _props.label }
          </label>
      }
      <div className='[ container__inner ] [ pos-relative ]'>
        <input 
          id={`${_props.label}-${_props.type}`}
          list={propOrDefault(_props.list, '')}

          onInput={(e) => _props.onInteract ? _props.onInteract(e) : null}
          placeholder={propOrDefault(_props.placeholder, '')} 

          value={_props.value}
          className={createCubeCSSClass({ ..._props })} type="text" 
        />

          {
            (_props.onClearInput && 
              hasTypeof(_props.value, ['string', 'number']) && 
              _props.value.length > 0 
            ) &&
            (
              <Button
                onInteract={() => _props.onClearInput!()} 
                compostClass='[ input__clear-button ]'
                utilClass='fw-bold pos-absolute border-radius-cubed pos-absolute'
                secondaryVariant='tight'
                >
                <Icon 
                  blockClass='input__clear-button' 
                  utilClass='fs-300 border-radius-cubed cursor-pointer'
                  ariaLabel={`Clear ${_props.value} text`}>{ TIMES_ICON }</Icon>
              </Button>
            )
          }
      </div>
    </div>
  )
}

export default TextInput