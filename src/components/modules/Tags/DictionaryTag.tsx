import React from 'react'
import { OP_TO_TEXT } from '../../../consts'
import { KeyValDict, Props_Interactibe } from '../../types'
import { Props_DictionaryCard } from '../../views/DictionaryView/types'
import Tag from './Tag'
import { Props_DictionaryTag } from './types'

const DictionaryTag = (props: Props_DictionaryTag) => {
  return (
    <button data-variant='empty' onClick={() => props.onInteract && props.onInteract(props.keyName)}>
      <Tag><b>{ props.keyName }</b> { (OP_TO_TEXT as any)[props.op] } <b>{ props.value }</b></Tag>
    </button>
  )
}

export default DictionaryTag