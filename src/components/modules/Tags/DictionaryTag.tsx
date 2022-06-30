import React from 'react'
import { KeyValDict, Props_Interactibe } from '../../types'
import { Props_DictionaryCard } from '../../views/DictionaryView/types'
import Tag from './Tag'
import { Props_DictionaryTag } from './types'

const DictionaryTag = (props: Props_DictionaryTag) => {
  return (
    <button data-variant='empty' onClick={() => props.onInteract && props.onInteract(props.keyName)}>
      <Tag><b>{ props.keyName }</b> is <b>{ props.value }</b></Tag>
    </button>
  )
}

export default DictionaryTag