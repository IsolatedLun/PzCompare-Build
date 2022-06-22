import React, { useState } from 'react'
import { prepareProps, propOrDefault, toggleTargetDropdown } from '../../../../utils/funcs'
import Button from '../../Buttons/Button'
import DropDownList from '../../Lists/DropDownList'
import { Props_TableRow } from '../types'

const EvolvedRecipeRow = (props: Props_TableRow) => {
  const [show, setShow] = useState(false);

  const values = props.value ? (props.value as string).split(';') : [];
  const dropdownId = props.value + '-dropdown' ;

  return (
    <tr>
        <td>{ props.keyName }</td>
        <td className='[ dir-ltr pos-relative ]'>
            <Button 
                blockClass='dropdown-button'
                compostClass='button'
                utilClass='border-radius-cubed whitespace-nowrap'
                variant='primary'
                secondaryVariant='tight'
                onInteract={() => { setShow(!show);  toggleTargetDropdown(dropdownId)}}>
              Show recipes
            </Button>

            <div className="[ pos-absolute ]">
              <DropDownList 
                id={dropdownId} 
                utilClass={`fs-300 border-radius-cubed`} 
                variant='dropdown'>
                {
                  values.map(val => {
                    const [text, _] = val.split(':');

                    return <li className='padding-1 under-border' data-parent-variant='list'>{ text }</li>;
                  })
                }
              </DropDownList>
            </div>
        </td>
        {
          props.pct 
          ? <td data-percent={props.pct !== null}>{ props.pct }%</td> 
          : <td data-percent='-1'>-</td>
        }
    </tr>
  )
}

export default EvolvedRecipeRow