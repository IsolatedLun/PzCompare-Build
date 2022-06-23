import React from 'react'
import { Props_DataList } from './types'

const Datalist = (props: Props_DataList) => {
  return (
    <datalist id={props.id}>
        {
            props.list.map((data, index) => <option value={data} key={index}/>)
        }
    </datalist>
  )
}

export default Datalist