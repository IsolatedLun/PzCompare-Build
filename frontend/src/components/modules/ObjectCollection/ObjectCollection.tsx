import React from 'react'
import { ARROW_RIGHT } from '../../../consts'
import Card from '../Cards/Card'
import Icon from '../Icons/Icon'
import { Props_ObjectCollection, Props_SubCollection } from './types'

const CollectionItem = ({ objName } : { objName: string }) => {
    return (
        <Card utilClass='padding-inline-2 padding-block-1 border-radius-cubed'>
            { objName }
        </Card>
    )
}

const SubCollection = (props: Props_SubCollection) => {
    return (
        <details className='[ collection__sub ]'>
            <summary className='[ sub__category ]' >
                <Card 
                    variant='light'
                    utilClass='flex align-items-center padding-inline-2 padding-block-1 
                        pos-relative border-radius-top-cubed'
                    >
                    <h3 
                        className='[ text-capital after-content ]' 
                        data-variant='pct-left'
                        data-after-text={props.objects.length}>
                        { props.subCategoryName }
                    </h3>
                    <div className='[ category__line ] [ margin-inline-start-5 margin-inline-end-2 ]'></div>
                    <Icon ariaLabel='' blockClass='category__arrow'>{ ARROW_RIGHT }</Icon>
                </Card>
            </summary>
            
            <div className="[ sub-collection__items ] [ flex-direction-column ] 
                [ gap-1 padding-2 border-radius-bottom-cubed ]">
                {
                    props.objects.map(objName => <CollectionItem objName={objName} />)
                }
            </div>
        </details>
      )  
}

const ObjectCollection = (props: Props_ObjectCollection) => {
  return (
    <details className='[ object-collection ]'>
        <summary className='[ collection__category ]' >
            <Card 
                utilClass='flex align-items-center padding-inline-2 padding-block-1 
                    pos-relative border-radius-top-cubed'
                >
                <h2 className='[ text-capital ]'>{ props.categoryName }</h2>
                <div className='[ category__line ] [ margin-inline-1 ]'></div>
                <Icon ariaLabel='' blockClass='category__arrow'>{ ARROW_RIGHT }</Icon>
            </Card>
        </summary>
        
        <div className="[ collection__items ] [ flex-direction-column ] [ gap-2 padding-2 border-radius-bottom-cubed ]">
            {
                Object.entries(props.subCategories).map(([key, val]) => 
                    <SubCollection 
                        subCategoryName={key}
                        objects={val as any} />)
            }
        </div>
    </details>
  )
}

export default ObjectCollection