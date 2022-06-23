import React, { useState } from 'react'
import { collapseText } from '../../../utils/funcs'
import AnchorButton from '../../modules/Buttons/AnchorButton'
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
            list='object-list'
            label='Item'
            placeholder='Search item'
            type='string'
            onClearInput={() => setItem('')}
            onInteract={(e) => setItem(e.currentTarget.value)} />

        <div className='[ flex justify-content-space-between margin-block-start-2 ]'>
          <AnchorButton 
            variant='primary'
            secondaryVariant='tight'
            utilClass='border-radius-cubed'
            target={'_self'}
            to={`#object-${collapseText(item)}`}>
            Search
          </AnchorButton>
          <LinkButton
            secondaryVariant='tight'
            utilClass='border-radius-cubed'
            variant='primary'
            target={'_self'}
            workCondition={props.objects[collapseText(item)] !== undefined}
            to={`/view?name=${item}`}>
            View Item
          </LinkButton>
        </div>

        <ul data-variant='primary' className='[ list ] [ margin-block-1 text-muted ]'>
          <li>You can search items without a category</li>
        </ul>
    </div>
  )
}

export default DictionarySearch