import React from 'react'
import { Props_ObjectTableHeader } from './types'

const ObjectTableHeader = (props: Props_ObjectTableHeader) => {
  return (
    <header className="[ flex justify-content-space-between align-items-center ] [ width-100 ]">
        <h3>{ props.name }</h3>
        <p  
            className='[ padding-inline-2 padding-block-1 border-radius-100vw ]'
            data-percent={props.avgPct > 0}>{ props.avgPct } %</p>
    </header>
  )
}

export default ObjectTableHeader