import React from 'react'
import { Link } from 'react-router-dom';
import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs'
import { Props_LinkButton } from './types';

const LinkButton = (props: Props_LinkButton) => {
    const _props = prepareProps(props, { blockClass: 'button' })
  
    return (
    <Link 
        to={props.to}

        className={createCubeCSSClass({ ..._props})}

        data-variant={_props.variant}
        data-secondary-variant={_props.secondaryVariant}
        data-work-condition={_props.workCondition !== null ? _props.workCondition : -1}

        aria-hidden={_props.variant === 'icon'}

        target={propOrDefault(props.target, '_blank')}

        onClick={(e) => _props.onInteract ? _props.onInteract(e) : null}
        >
        { _props.children }
    </Link>
  )
}

export default LinkButton