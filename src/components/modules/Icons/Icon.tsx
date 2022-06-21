import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs';
import { Props_Icon } from './types';

const Icon = (props: Props_Icon) => {
    const _props = prepareProps<Props_Icon>(props, { 
        compostClass: !props.notUseDefaultCls ? 'icon' : '', utilClass: 'select-none' 
    });

    return (
        <span 
            aria-hidden
            aria-label={_props.ariaLabel}
            data-custom-weight={propOrDefault(_props.isCustomWeight, false)}

            className={createCubeCSSClass({ ..._props })} 

            data-variant={_props.variant}>
            { _props.children }
        </span>
    )
}

export default Icon