import React from 'react'
import { ARROW_RIGHT } from '../../../consts'
import Card from '../Cards/Card'
import Icon from '../Icons/Icon'

const ObjectCollection = () => {
  return (
    <details className='[ object-collection ]'>
        <summary className='[ collection__category ]' >
            <Card 
                utilClass='flex align-items-center padding-inline-2 padding-block-1 
                    pos-relative border-radius-top-cubed'
                >
                <h2 className=''>Vanilla</h2>
                <div className='[ category__line ] [ margin-inline-1 ]'></div>
                <Icon ariaLabel='' blockClass='category__arrow'>{ ARROW_RIGHT }</Icon>
            </Card>
        </summary>
        
        <div className="[ collection__items ] [ padding-2 border-radius-bottom-cubed ]">
            JOE BIDEN
        </div>
    </details>
  )
}

export default ObjectCollection