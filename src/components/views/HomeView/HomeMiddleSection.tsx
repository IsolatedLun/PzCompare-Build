import { useState } from 'react'
import { PLUS_ICON } from '../../../consts'
import Button from '../../modules/Buttons/Button'
import CheckboxInput from '../../modules/Inputs/CheckboxInput'
import TextInput from '../../modules/Inputs/TextInput'
import { Props_MiddleHome } from './types'

const HomeMiddleSection = (props: Props_MiddleHome) => {
  return (
    <div className="[ home-controls ] [ width-100vw flex-direction-column gap-2 ]">
        <TextInput 
          type='string'
          list='object-list'
          value={props.xObjVal}
          label='First object'
          hideLabel={true}
          onInteract={(e) => props.xObjSetter(e.currentTarget.value)}
          blockClass='input'
          utilClass='width-100' />

        <Button 
        blockClass='button'
        compostClass='icon' 
        ariaLabel='Compare'
        utilClass='margin-inline-auto border-radius-100vw'
        onInteract={() => { props.compareFunction() }}
        >
            { PLUS_ICON }
        </Button>
        
        <TextInput 
          type='string'
          list='object-list'
          value={props.yObjVal}
          label='Second object'
          hideLabel={true}
          onInteract={(e) => props.yObjSetter(e.currentTarget.value)}
          blockClass='input'
          utilClass='width-100' />
          
          <div>
            <h2 className='[ under-border ]'>Options</h2>
            <div className="[ controls__options ] [ margin-block-2 ]">
              <CheckboxInput text='Show differences'
                type='boolean' 
                value={props.showDiffs}
                onInteract={() => props.showDiffsSetter(!props.showDiffs)} />
            </div>

            <div>
              <h2 className='[ under-border ] [ margin-bottom-1 ]'>Misc</h2>
              <p className='text-muted'>Hover over text to show it's full content</p>
            </div>
          </div>
    </div>
  )
}

export default HomeMiddleSection