import React from 'react'
import { Props_MasterData } from '../../../types'
import Card from '../../modules/Cards/Card'
import ObjectCollection from '../../modules/ObjectCollection/ObjectCollection'
import DictionarySearch from './DictionarySearch'

const Dictionary = (props: Props_MasterData) => {
  return (
    <section 
        className="[ dictionary-container ] [ grid gap-4 margin-block-1 ]" 
        role='Dictionary section' 
        data-grid-collapse
        >
        <DictionarySearch />

        <div className='[ dictionary ]'>
            <header 
              className='[ dictionary-header ] [ flex gap-1 ] [ under-border padding-block-end-1 margin-block-end-2 ]'>
                <Card utilClass='padding-1 border-radius-cubed'>0 <span className='fs-300'>Mods</span></Card>
                <Card utilClass='padding-1 border-radius-cubed'>0 <span className='fs-300'>Categories</span></Card>
                <Card utilClass='padding-1 border-radius-cubed'>0 <span className='fs-300'>Items</span></Card>
            </header>

            <ObjectCollection />
        </div>
    </section>
  )
}

export default Dictionary