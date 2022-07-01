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

        <div className='[ flex flex-direction-column align-items-center gap-1 margin-block-start-1 ]'>
          <KeyValueInput onInteract={(e) => setCurrentFilter(e)} blockClass='search__key-val-container' />
          <div className='[ flex justify-content-end width-100 ]'>
            <Button 
              variant='primary' 
              secondaryVariant='tight' 
              workCondition={containsEmptyValue(currentFilter)}
              onInteract={() => props.filtersSetter((state: any) => 
                ({ ...state, [currentFilter.keyName]: currentFilter.value }))}
              utilClass='border-radius-cubed'>
              Add
            </Button>
          </div>

          <Card utilClass='border-radius-cubed width-100 margin-block-2'>
            <CardHeader utilClass='flex align-items-center justify-content-space-between
                padding-1 text-center border-radius-top-cubed'>
              <p className='[ fs-500 ]'>{ Object.values(props.filtersValue).length } Active filters</p>
              <Button 
                utilClass='fs-200 border-radius-cubed' 
                variant='primary' 
                onInteract={() => props.filtersSetter({})}
                secondaryVariant='very-tight'>
                Clear
              </Button>
            </CardHeader>

            <div className='[ flex gap-1 padding-1 ]'>
              { Object.entries(props.filtersValue).map(([key, val]) => 
              <DictionaryTag 
                  keyName={key} value={val}
                  
                  onInteract={(e) => props.filtersSetter((state: any) => {
                    delete state[e];

                    return { ...state };
                  })} />) 
              }
            </div>
          </Card>

          <ul data-variant='primary' className='[ list ] [ flex flex-direction-column gap-1 text-muted ]'>
            <li>Case sensitive</li>
            <li>Eg.  Key = Type, Value = Weapon</li>
          </ul>
        </div>

        <div className='margin-block-1'>
          <CheckboxInput 
            text='Show items only' 
            type='string' 
            value={props.showByNamesValue} 
            onInteract={() => props.showByNamesSetter(!props.showByNamesValue)} />
        </div>

        <ul data-variant='primary' className='[ list ] [ flex flex-direction-column gap-1 text-muted ]'>
          <li>Filters only apply when items are shown.</li>
        </ul>
    </div>
  )
}

export default DictionarySearch