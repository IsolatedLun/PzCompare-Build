import React from 'react'
import { prepareProps } from '../../../utils/funcs'
import Button from '../Buttons/Button'
import { Props_Pagination } from './types'

const Pagination = (props: Props_Pagination) => {
    const _props = prepareProps(props);

    function next() {
        if(props.end + props.count > props.dataLen) {
            const offset = Math.ceil(props.dataLen % props.end);

            props.endSetter(props.end + offset);
            props.startSetter(props.end);

            if(props.end === props.dataLen)
                reset()
        }
            
        else {
            props.endSetter(num => {
                props.startSetter(num);
                return num + props.count;
            });
        }
    }

    function previous() {
        if(props.start !== 0) {
            props.startSetter(num => {
                 props.endSetter(num);

                return Math.abs(num - props.count);
            });
        }
    }

    function reset() {
        props.startSetter(0);
        props.endSetter(props.count);
    }

  return (
    <div className='[ flex align-items-center justify-content-space-between margin-block-1 ]'>
        <Button 
            variant='primary' 
            secondaryVariant='tight' 
            utilClass='border-radius-cubed'
            onInteract={previous}
            >
            Previous
        </Button>
        <div className='[ flex gap-2 align-items-center ]'>
            <Button 
                variant='primary' 
                secondaryVariant='tight' 
                utilClass='border-radius-cubed'
                onInteract={reset}
                >
                Reset
            </Button>
            <p>{ props.end } / { props.dataLen }</p>
        </div>
        <Button 
            variant='primary' 
            secondaryVariant='tight' 
            utilClass='border-radius-cubed'
            onInteract={next}
            >
            Next
        </Button>
    </div>
  )
}

export default Pagination