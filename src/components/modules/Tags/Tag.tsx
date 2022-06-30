import React from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_Element } from '../../types'

const Tag = (props: Props_Element) => {
    const _props = prepareProps(props, { 
        compostClass: 'tag', 
        utilClass: 'padding-1 fs-300 border-radius-cubed cursor-pointer' });

  return (
    <p 
        data-variant={_props.variant}
        data-secondary-variant={_props.secondaryVariant}
        className={createCubeCSSClass({ ..._props })}
        >
        { _props.children }
    </p>
  )
}

export default Tag