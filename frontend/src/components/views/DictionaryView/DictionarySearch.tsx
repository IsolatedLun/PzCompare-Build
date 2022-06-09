import React from 'react'
import TextInput from '../../modules/Inputs/TextInput'

const DictionarySearch = () => {
  return (
    <div className='[ dictionary-search ] [ width-100 ]'>
        <TextInput 
            compostClass='input' 
            utilClass='width-100'
            value='' 
            type='string'
            onClearInput={() => null}
            onInteract={() => null} />
    </div>
  )
}

export default DictionarySearch