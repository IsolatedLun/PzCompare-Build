import { PLUS_ICON } from '../../../consts'
import Button from '../../modules/Buttons/Button'
import TextInput from '../../modules/Inputs/TextInput'

const HomeMiddleSection = () => {
  return (
    <div className="[ home-controls ] [ flex-direction-column gap-2 ]">
        <TextInput blockClass='input' />

        <Button 
        blockClass='button'
        compostClass='icon' 
        ariaLabel='Compare'
        utilClass='margin-inline-auto border-radius-100vw'>
            { PLUS_ICON }
        </Button>
        
        <TextInput blockClass='input' />
    </div>
  )
}

export default HomeMiddleSection