import React from 'react'
import { Link } from 'react-router-dom'
import { GITHUB_ICON, YOUTUBE_ICON } from '../../../consts'
import Button from '../../modules/Buttons/Button'
import Icon from '../../modules/Icons/Icon'

const Footer = () => {
  return (
    <footer 
        className='[ primary-footer ] [ flex align-items-center justify-content-space-between ] 
            [ padding-2 gap-2 ]'
        data-flex-collapse>
        <div className='[ flex gap-1 align-items-center ]' data-flex-collapse>
            <h2>PzCB</h2>
            <p className='[ text-muted ] [ fs-300 ]'>
                © 2022 PzCompare | Build, Made with&nbsp;
                <Icon utilClass='fs-400' ariaLabel='Egg'>&#129370;</Icon>
            </p>

            <Button 
                secondaryVariant='tight' 
                variant='coffee'
                compostClass='has-link' 
                utilClass='border-radius-cubed'>
                <a href="https://www.buymeacoffee.com/isolated" target={'_blank'}>
                    Buy me a Coffee ☕
                </a>
            </Button>
        </div>

        <div>
            <div className="[ footer__links ] [ flex gap-4 align-items-end ] [ fs-350 ]">
                <Link data-variant='link' to={'/'}>Home</Link>
                <Link data-variant='link' to={'/dictionary'}>Dictionary</Link>
                <a data-variant='link' href={'mailto:isolunaj3@gmail.com'}>Request / Contact</a>
                <a 
                    data-variant='link' 
                    data-custom-color=''
                    className='[ fs-400 clr-patreon-400 ]' 
                    target='_blank'
                    href="https://www.patreon.com/user?u=16045513">Support</a>
            </div>

            <div className="[ footer__socials ] [ flex gap-1 justify-content-end margin-block-start-1 ]">
                <a 
                    target='_blank'
                    href="https://www.youtube.com/channel/UCb3kc0iA0uucEOT9A25fUuA">
                    <Icon compostClass='fab' ariaLabel='Youtube'>{ YOUTUBE_ICON }</Icon>
                </a>
                <a 
                    target='_blank'
                    href="https://github.com/IsolatedLun/PzCompare-Build">
                    <Icon compostClass='fab' ariaLabel='Github'>{ GITHUB_ICON }</Icon>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer