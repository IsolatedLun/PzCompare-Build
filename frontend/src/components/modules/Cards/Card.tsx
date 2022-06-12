import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs';
import { Props_Card } from './types';

const Card = (props: Props_Card) => {
    const _props = prepareProps(props, { compostClass: 'card' })

    return (
        <div className={createCubeCSSClass({ ..._props })} data-variant={_props.variant}>
            { props.children }
        </div>
    )
}

export default Card