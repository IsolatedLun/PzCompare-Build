import React from 'react'
import Button from '../../Buttons/Button'
import { Props_TableRow } from '../types'

const EvolvedRecipeRow = (props: Props_TableRow) => {
  return (
    <tr>
        <td>{ props.keyName }</td>
        <td className='[ dir-ltr ]'>
            <Button 
                blockClass='button'
                utilClass='border-radius-100vw'
                variant='primary'>
              Show recipes
            </Button>
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