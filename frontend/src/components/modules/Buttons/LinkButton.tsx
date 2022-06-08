import React from 'react'
import { Link } from 'react-router-dom';
import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs'
import { Props_LinkButton } from './types';

const LinkButton = (props: Props_LinkButton) => {
    const variant = propOrDefault<string>(props.variant, 'default');
    const secondaryVariant = propOrDefault<string>(props.secondaryVariant, 'default');
  
    return (
    <Link 
        to={props.to}

        className={createCubeCSSClass(props)}
        data-variant={variant}
        data-secondary-variant={secondaryVariant}
        aria-label={propOrDefault(props.ariaLabel, 'Button')}
        aria-hidden={props.variant === 'icon'}
        onClick={(e) => props.onInteract ? props.onInteract(e) : null}
        >
        { props.children }
    </Link>
  )
}

export default LinkButton