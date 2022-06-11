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
          value={props.xObjVal}
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
          value={props.yObjVal}
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
          </div>
    </div>
  )
}

export default HomeMiddleSection