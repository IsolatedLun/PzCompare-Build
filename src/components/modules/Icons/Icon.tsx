import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs';
import { Props_AriaElement, Props_Element } from '../../types'

const Icon = (props: Props_AriaElement) => {
    const _props = prepareProps<Props_AriaElement>(props, { compostClass: 'icon', utilClass: 'select-none' });

    return (
        <span 
            aria-hidden
            aria-label={_props.ariaLabel}

            className={createCubeCSSClass({ ..._props })} 

            data-variant={_props.variant}>
            { _props.children }
        </span>
    )
}

export default Icon