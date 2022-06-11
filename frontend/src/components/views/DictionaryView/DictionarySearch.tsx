import React, { useState } from 'react'
import { openNestedDetails } from '../../../utils/funcs'
import LinkButton from '../../modules/Buttons/LinkButton'
import TextInput from '../../modules/Inputs/TextInput'

const DictionarySearch = () => {
  const [item, setItem] = useState('');

  return (
    <div className='[ dictionary-search ] [ flex-direction-column gap-1 ] [ width-100 ]'>
        <TextInput 
            compostClass='input' 
            utilClass='width-100'
            value='' 
            label='Category'
            placeholder='Search category'
            type='string'
            onClearInput={() => null}
            onInteract={() => null} />

        <TextInput 
            compostClass='input' 
            utilClass='width-100'
            value={item}
            label='Item'
            placeholder='Search item'
            type='string'
            onClearInput={() => null}
            onInteract={(e) => setItem(e.currentTarget.value)} />

        <a 
          href={`#object-${item}`} 
          data-secondary-variant='tight' 
          className='[ button ] [ border-radius-cubed margin-inline-auto margin-block-start-2 ]'
          data-variant='primary'>Search</a>
    </div>
  )
}

export default DictionarySearch