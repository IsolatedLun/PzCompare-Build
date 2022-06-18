import { useState } from 'react'
import { Props_MasterData } from '../../../types'
import { strSearch } from '../../../utils/funcs'
import Card from '../../modules/Cards/Card'
import ObjectCollection from '../../modules/ObjectCollection/ObjectCollection'
import DictionarySearch from './DictionarySearch'
import { Props_DictionaryCard } from './types'

const DictionaryCard = (props: Props_DictionaryCard) => {
  return (
    <Card utilClass='padding-1 border-radius-cubed'>
      { props.num } <span className='fs-300'>{ props.text }</span>
    </Card>
  )
}

const Dictionary = (props: Props_MasterData) => {
  const [category, setCategory] = useState('');

  return (
    <section 
        className="[ dictionary-container ] [ grid gap-4 margin-block-1 ]" 
        role='Dictionary section' 
        data-grid-collapse
        >
        <DictionarySearch 
          objects={props.masterData.objects}

          categoryValue={category} 
          categorySetter={setCategory}  />

        <div className='[ dictionary ]'>
            <header 
              className='[ dictionary-header ] [ flex-wrap gap-1 justify-content-center ] 
                [ under-border padding-block-end-1 margin-block-end-2 ]'>
                {
                  Object.entries(props.masterData.misc).map(([key, val]) => (
                    <DictionaryCard num={val} text={key} />
                  ))
                }
            </header>

            <div className="[ object-collections ] [ flex-direction-column ] [ gap-3 ]">
              {
                Object.entries(props.masterData.categories).map(([key, val]) => {
                  if(category.length > 0 && strSearch(key, category))
                    return <ObjectCollection 
                              categoryName={key}
                              subCategories={val} />
                  else if(category.length === 0)
                    return <ObjectCollection 
                              categoryName={key}
                              subCategories={val} />
                })
                  
              }
            </div>
        </div>
    </section>
  )
}

export default Dictionary