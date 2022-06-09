import { createCubeCSSClass, propOrDefault } from '../../../utils/funcs';
import { Props_Card } from './types';

const Card = (props: Props_Card) => {
    const variant = propOrDefault<string>(props.variant, 'default');

    return (
        <div className={createCubeCSSClass({ ...props, compostClass: 'card' })} data-variant={variant}>
            { props.children }
        </div>
    )
}

export default Card