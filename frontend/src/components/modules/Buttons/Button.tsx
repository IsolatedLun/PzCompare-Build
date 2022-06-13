import React from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_Button } from './types';

const Button = (props: Props_Button<HTMLButtonElement>) => {
    const _props = prepareProps(props, { compostClass: 'button' });

    return (
        <button 
            className={createCubeCSSClass({ ..._props })}

            data-variant={_props.variant}
            data-secondary-variant={_props.secondaryVariant}
            data-work-condition={props.workCondition !== null ? props.workCondition : -1}

            aria-label={_props.ariaLabel}
            aria-hidden={props.variant === 'icon'}
            
            onClick={(e) => props.onInteract ? props.onInteract(e) : null}
            >
            { props.children }
        </button>
    )
}

export default Button