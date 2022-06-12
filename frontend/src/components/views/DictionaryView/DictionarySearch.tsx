import React, { useState } from 'react'
import { collapseText, highlightElement, openNestedDetails } from '../../../utils/funcs'
import LinkButton from '../../modules/Buttons/LinkButton'
import TextInput from '../../modules/Inputs/TextInput'
import { Props_DictionarySearch } from './types'

const DictionarySearch = (props: Props_DictionarySearch) => {
  const [item, setItem] = useState('');

  return (
    <div className='[ dictionary-search ] [ flex-direction-column gap-1 ] [ width-100 ]'>
        <TextInput 
            compostClass='input' 
            utilClass='width-100'
            value={props.categoryValue}
            label='Category'
            placeholder='Search category'
            type='string'
            onClearInput={() => props.categorySetter('')}
            onInteract={(e) => props.categorySetter(e.currentTarget.value)} />

        <TextInput 
            compostClass='input' 
            utilClass='width-100'
            value={item}
            label='Item'
            placeholder='Search item'
            type='string'
            onClearInput={() => setItem('')}
            onInteract={(e) => setItem(e.currentTarget.value)} />

        <a 
          href={`#object-${collapseText(item)}`} 
          onClick={() => highlightElement(`object-${collapseText(item)}`, true)}
          data-secondary-variant='tight' 
          className='[ button ] [ border-radius-cubed margin-inline-auto margin-block-start-2 ]'
          data-variant='primary'
          >
            Search
        </a>

        <ul data-variant='primary' className='[ list ] [ margin-block-1 text-muted ]'>
          <li>You can search items without a category</li>
        </ul>
    </div>
  )
}

export default DictionarySearch