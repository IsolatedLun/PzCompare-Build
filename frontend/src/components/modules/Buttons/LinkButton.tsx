import React from 'react'
import { Link } from 'react-router-dom';
import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs'
import { Props_LinkButton } from './types';

const LinkButton = (props: Props_LinkButton) => {
    const _props = prepareProps(props, { blockClass: 'button' })
  
    return (
    <Link 
        to={props.to}

        className={createCubeCSSClass({ ...props, blockClass: 'button' })}

        data-variant={_props.variant}
        data-secondary-variant={_props.secondaryVariant}
        data-work-condition={props.workCondition !== null ? props.workCondition : -1}

        aria-hidden={_props.variant === 'icon'}

        onClick={(e) => _props.onInteract ? _props.onInteract(e) : null}
        >
        { _props.children }
    </Link>
  )
}

export default LinkButton