import React from 'react'
import { Link } from 'react-router-dom'
import { ARROW_RIGHT } from '../../../consts'
import LinkButton from '../../modules/Buttons/LinkButton'
import Icon from '../../modules/Icons/Icon'

const Navbar = () => {
  return (
    <nav 
        role='Primary navigation'
        className='[ main-nav ] [ flex justify-content-space-between align-items-center ]  [ padding-1 ]'>

        <h1 className='[ after-content ]' data-after-text='Build 41.71'>
          <Link to=''>
            PzCompare <span data-sr>Build 41.72</span>
          </Link>
        </h1>

        <LinkButton 
          compostClass='button'
          utilClass='border-radius-cubed' 
          variant='primary'
          secondaryVariant='tight'
          to='/dictionary'>
          Dictionary <Icon ariaLabel='' utilClass='[ margin-inline-start-1 ]'>{ ARROW_RIGHT }</Icon>
        </LinkButton>
    </nav>
  )
}

export default Navbar