import React from 'react'
import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs'
import { Props_Button } from './types';

const Button = (props: Props_Button<HTMLButtonElement>) => {
    const variant = propOrDefault<string>(props.variant, 'default');
    const secondaryVariant = propOrDefault<string>(props.secondaryVariant, 'default');

    return (
        <button 
            className={createCubeCSSClass(props)}
            data-variant={variant}
            data-secondary-variant={secondaryVariant}
            aria-label={propOrDefault(props.ariaLabel, 'Button')}
            aria-hidden={props.variant === 'icon'}
            onClick={(e) => props.onInteract ? props.onInteract(e) : null}
            >
            { props.children }
        </button>
    )
}

export default Button