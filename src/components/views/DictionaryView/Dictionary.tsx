import { useState } from 'react'
import { usePagination } from '../../../hooks/usePagination'
import { Props_MasterData } from '../../../types'
import { strSearch } from '../../../utils/funcs'
import { Card } from '../../modules/Cards/Card'
import { CollectionItem, ObjectCollection } from '../../modules/ObjectCollection/ObjectCollection'
import Pagination from '../../modules/Pagination/Pagination'
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
  const [item, setItem] = useState('');

  const [allItems, setAllItems] = useState(props.masterData.names);

  const [showByNames, setShowByNames] = useState(false);
  const [count, setCount] = useState(10);

  const [ items, setStart, setEnd, _count, allDataLen, [start, end] ] = 
    usePagination(props.masterData.names, count, item);

  return (
    <section 
        className="[ dictionary-container ] [ grid gap-4 margin-block-1 ]" 
        role='Dictionary section' 
        data-grid-collapse
        >
        <DictionarySearch 
          objects={props.masterData.objects}

          categoryValue={category} 
          categorySetter={setCategory}

          itemSetter={setItem}
          itemValue={item}

          showByNamesValue={showByNames}
          showByNamesSetter={setShowByNames}  />

        <div className='[ dictionary ]'>
            <header 
              className='[ dictionary-header ] [ flex-wrap gap-1 justify-content-center ] 
                [ under-border padding-block-end-1 margin-block-end-2 ]'>
                {
                  Object.entries(props.masterData.misc).map(([key, val], index) => (
                    <DictionaryCard num={val} text={key} key={index}/>
                  ))
                }
            </header>

            <div className={`[ object-collections ] [ flex-direction-column ] [ ${showByNames ? 'gap-1' : 'gap-3'} ]`}>
              {
                !showByNames
                ?
                Object.entries(props.masterData.categories).map(([key, val], index) => {
                  if(category.length > 0 && strSearch(key, category))
                    return <ObjectCollection 
                              categoryName={key}
                              subCategories={val} 
                              key={index + key} />
                  else if(category.length === 0)
                    return <ObjectCollection 
                              categoryName={key}
                              subCategories={val}
                              key={index + key} />
                })
                : (
                  <>
                    { items.map(obj => <CollectionItem name={obj} subParentId='' />) }
                    <Pagination 
                      startSetter={setStart}
                      endSetter={setEnd}

                      count={count}
                      start={start}
                      end={end}
                      dataLen={allDataLen}
                    />
                  </>
                ) 
              }
            </div>
        </div>
    </section>
  )
}

export default Dictionary