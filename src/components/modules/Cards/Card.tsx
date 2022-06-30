import { createCubeCSSClass, prepareProps } from '../../../utils/funcs';
import { Props_Card } from './types';

const CardHeader = (props: Props_Card) => {
    const _props = prepareProps(props, { compostClass: 'card-header' })

    return (
        <header className={createCubeCSSClass({ ..._props })} data-variant={_props.variant}>
            { props.children }
        </header>
    )
}

const Card = (props: Props_Card) => {
    const _props = prepareProps(props, { compostClass: 'card' })

    return (
        <div className={createCubeCSSClass({ ..._props })} data-variant={_props.variant}>
            { props.children }
        </div>
    )
}

export { Card, CardHeader }