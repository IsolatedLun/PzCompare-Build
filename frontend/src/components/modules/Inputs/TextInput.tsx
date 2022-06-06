import React from 'react'
import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs'
import { Props_Input } from './types'

const TextInput = (props: Props_Input<string>) => {
  return (
    <input 
      onInput={(e) => props.onInteract ? props.onInteract(e) : null}
      placeholder={propOrDefault(props.placeholder, '')} 
      value={props.value}
      className={createCubeCSSClass(props)} type="text" 
      />
  )
}

export default TextInput