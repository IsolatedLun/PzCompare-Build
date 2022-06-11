import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs';
import { Props_AriaElement, Props_Element } from '../../types'

const Icon = (props: Props_AriaElement) => {
    const variant = propOrDefault<string>(props.variant as string, 'default');

    return (
        <span 
            aria-hidden
            aria-label={props.ariaLabel}
            className={createCubeCSSClass({ ...props, compostClass: 'icon', utilClass: 'select-none ' + props.utilClass })} 
            data-variant={variant}>
            { props.children }
        </span>
    )
}

export default Icon