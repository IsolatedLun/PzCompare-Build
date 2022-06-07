import { PLUS_ICON } from '../../../consts'
import Button from '../../modules/Buttons/Button'
import TextInput from '../../modules/Inputs/TextInput'
import { Props_MiddleHome } from './types'

const HomeMiddleSection = (props: Props_MiddleHome) => {
  return (
    <div className="[ home-controls ] [ width-100vw flex-direction-column gap-2 ]">
        <TextInput 
          value={props.xObjVal}
          onInteract={(e) => props.xObjSetter(e.currentTarget.value)}
          blockClass='input'
          utilClass='width-100' />

        <Button 
        blockClass='button'
        compostClass='icon' 
        ariaLabel='Compare'
        utilClass='margin-inline-auto border-radius-100vw'
        onInteract={() => { props.compareFunction(); alert('MEOW') }}
        >
            { PLUS_ICON }
        </Button>
        
        <TextInput 
          value={props.yObjVal}
          onInteract={(e) => props.yObjSetter(e.currentTarget.value)}
          blockClass='input'
          utilClass='width-100' />
    </div>
  )
}

export default HomeMiddleSection