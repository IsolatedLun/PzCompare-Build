import React from 'react'
import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs'
import { Props_Input } from './types'

const TextInput = (props: Props_Input) => {
  return (
    <input 
      placeholder={propOrDefault(props.placeholder, '')} 
      className={createCubeCSSClass(props)} type="text" 
      />
  )
}

export default TextInput