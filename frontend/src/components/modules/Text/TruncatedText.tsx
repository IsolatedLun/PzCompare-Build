import React, { useState } from 'react'
import { Props_TruncatedText } from './types'

const TruncatedText = (props: Props_TruncatedText) => {
    const [show, setShow] = useState(false);

    if(props.text)
        return (
            <p>
                { props.text.slice(0, props.maxLen) }
                {
                    props.text.length > props.maxLen && 
                    (
                        <a 
                            className='[ cursor-pointer ]' 
                            data-variant='link'
                            aria-label='Truncated text'
                            aria-hidden={show}
                            onClick={() => setShow(!show)}>
                            {
                                show
                                ? props.text.slice(props.maxLen)
                                : "..."
                            }
                        </a>
                    )
                }
            </p>
        )
    return <p></p>
}

export default TruncatedText