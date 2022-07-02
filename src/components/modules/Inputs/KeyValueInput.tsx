import React, { useEffect, useState } from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs';
import { Props_Element } from '../../types';
import TextInput from './TextInput'
import { Props_Input, Props_KeyValueInput } from './types';

const KeyValueInput = (props: Props_KeyValueInput) => {
    const _props = prepareProps(props, { blockClass: 'key-value-input-container', utilClass: 'flex gap-2' })

    const [key, setKey] = useState('');
    const [value, setValue] = useState('');


    useEffect(() => {
        props.onInteract && props.onInteract({ keyName: key, value });
    }, [key, value])

    return (
        <div className={createCubeCSSClass(_props)}>
            <TextInput 
                onInteract={(e) => setKey(e.currentTarget.value)} 
                value={key} 
                label='Key/Attribute'
                type='string' />
            <TextInput
                onInteract={(e) => setValue(e.currentTarget.value)} 
                value={value} 
                label='Value'
                type='string' />
        </div>
    )
}

export default KeyValueInput