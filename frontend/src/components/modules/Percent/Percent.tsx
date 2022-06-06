import React from 'react'
import { CARET_DOWN, CARET_UP } from '../../../consts';
import { Props_Percent } from './types';

const Percent = (props: Props_Percent) => {
    const dataPct = props.pct === 0 ? -1 : props.pct > 0 ? true : false;

  return (
    <p 
        className='[ padding-inline-2 padding-block-1 border-radius-100vw ]'
        data-percent={dataPct}>
        <span aria-hidden className='[ icon ] [ margin-inline-end-1 ]'>
        {
            dataPct > 0
            ? CARET_UP 
            : CARET_DOWN
        }
        </span>
        { props.pct } %
    </p>
  )
}

export default Percent