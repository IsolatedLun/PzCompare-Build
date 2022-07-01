import { useState } from 'react'
import { containsEmptyValue, safeUrlEncode } from '../../../utils/funcs'
import AnchorButton from '../../modules/Buttons/AnchorButton'
import Button from '../../modules/Buttons/Button'
import LinkButton from '../../modules/Buttons/LinkButton'
import { Card, CardHeader } from '../../modules/Cards/Card'
import CheckboxInput from '../../modules/Inputs/CheckboxInput'
import KeyValueInput from '../../modules/Inputs/KeyValueInput'
import TextInput from '../../modules/Inputs/TextInput'
import DictionaryTag from '../../modules/Tags/DictionaryTag'
import { KeyValDict } from '../../types'
import { Props_DictionarySearch } from './types'

const DictionarySearch = (props: Props_DictionarySearch) => {
  const [currentFilter, setCurrentFilter] = useState<KeyValDict>({
    keyName: '',
    value: ''
  });
  const [filters, setFilters] = useState<KeyValDict[]>([]);

  return (
    <div className='[ dictionary-search ] [ flex-direction-column gap-1 ] [ width-100 ]'>
        <TextInput 
            utilClass='width-100'
            value={props.categoryValue}
            label='Category/Mod'
            placeholder='Search category'
            type='string'
            onClearInput={() => props.categorySetter('')}
            onInteract={(e) => props.categorySetter(e.currentTarget.value)} />

        <TextInput 
            utilClass='width-100'
            value={props.itemValue}
            list='object-list'
            label='Item'
            placeholder='Search item'
            type='string'
            onClearInput={() => props.itemSetter('')}
            onInteract={(e) => props.itemSetter(e.currentTarget.value)} />

        <div className='[ flex justify-content-end margin-block-start-2 ]'>
          <LinkButton
            secondaryVariant='tight'
            utilClass='border-radius-cubed'
            variant='primary'
            target={'_self'}
            workCondition={props.objects[props.itemValue] !== undefined}
            to={`/view?name=${safeUrlEncode(props.itemValue)}`}>
            View Item
          </LinkButton>
        </div>

        <div className='[ flex flex-direction-column align-items-center gap-1 ]' data-hide='false'>
          <KeyValueInput onInteract={(e) => setCurrentFilter(e)} blockClass='search__key-val-container' />
          <div className='[ flex justify-content-space-between width-100 ]'>
            <Button 
              variant='primary' 
              secondaryVariant='tight' 
              workCondition={containsEmptyValue(currentFilter)}
              onInteract={() => setFilters((state) => Array.from(new Set([ ...state, currentFilter ])))}
              utilClass='border-radius-cubed'>
              Add
            </Button>
            <Button 
              variant='primary' 
              secondaryVariant='tight' 
              utilClass='border-radius-cubed'>
              Filter
            </Button>
          </div>

          <Card utilClass='border-radius-cubed width-100 margin-block-2'>
            <CardHeader utilClass='flex align-items-center justify-content-space-between
                padding-1 text-center border-radius-top-cubed'>
              <p className='[ fs-500 ]'>{ filters.length } Active filters</p>
              <Button 
                utilClass='fs-200 border-radius-cubed' 
                variant='primary' 
                onInteract={() => setFilters([])}
                secondaryVariant='very-tight'>
                Clear
              </Button>
            </CardHeader>

            <div className='[ flex gap-1 padding-1 ]'>
              { filters.map(filter => 
              <DictionaryTag 
                  {...filter} 
                  onInteract={(e) => setFilters((state) => state.filter(x => x.keyName !== e))} />) 
              }
            </div>
          </Card>
        </div>

        <div className='margin-block-1'>
          <CheckboxInput 
            text='Show items only' 
            type='string' 
            value={props.showByNamesValue} 
            onInteract={() => props.showByNamesSetter(!props.showByNamesValue)} />
        </div>

        <ul data-variant='primary' className='[ list ] [ flex flex-direction-column gap-1 text-muted ]'>
          <li>You can search items without a category.</li>
          <li>Filters only apply when items are shown. [WIP]</li>
        </ul>
    </div>
  )
}

export default DictionarySearch