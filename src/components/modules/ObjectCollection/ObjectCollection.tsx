import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { ARROW_RIGHT } from '../../../consts'
import { collapseText, safeUrlEncode } from '../../../utils/funcs'
import { Card } from '../Cards/Card'
import Icon from '../Icons/Icon'
import { Props_ObjectCollection, Props_SubCollection, Props_SubCollectionItem } from './types'

const CollectionItem = (props: Props_SubCollectionItem) => {
    return (
        <Card 
            blockClass='collection__item' 
            utilClass='padding-inline-2 padding-block-1 border-radius-cubed'>
            <Link to={`/view?name=${safeUrlEncode(props.name)}`} 
                data-parent-id={props.subParentId} 
                id={'object-' + `"${props.name}"`}>
                { props.name }
            </Link>
        </Card>
    )
}

const SubCollection = (props: Props_SubCollection) => {
    const subDetailId = useId();
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <details id={subDetailId} data-parent-id={props.parentId} className='[ collection__sub ]'>
            <summary className='[ sub__category ]' onClick={() => setIsOpen(true)}>
                <Card 
                    variant='light'
                    utilClass='flex align-items-center padding-inline-2 padding-block-1 
                        pos-relative border-radius-top-cubed'
                    >
                    <h3 
                        className='[ text-capital after-content whitespace-nowrap ]' 
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
                    isOpen
                    ?
                    props.objects.map((data, index) => <CollectionItem
                            name={data} subParentId={subDetailId} key={index + data}  />
                        )
                    : null
                }
            </div>
        </details>
      )  
}

const ObjectCollection = (props: Props_ObjectCollection) => {
    const detailId = useId();

    // Only renders items when the <details> is open, improves performance.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details id={detailId} className='[ object-collection ]'>
            <summary className='[ collection__category ]' onClick={() => setIsOpen(true)}>
                <Card 
                    utilClass='flex align-items-center padding-inline-2 padding-block-1 
                        pos-relative border-radius-top-cubed'
                    >
                    <h2 className='[ text-capital whitespace-nowrap ]'>{ props.categoryName }</h2>
                    <div className='[ category__line ] [ margin-inline-1 ]'></div>
                    <Icon ariaLabel='' blockClass='category__arrow'>{ ARROW_RIGHT }</Icon>
                </Card>
            </summary>
            
            <div className="[ collection__items ] [ flex-direction-column ] 
                [ gap-2 padding-2 border-radius-bottom-cubed ]">
                {
                    isOpen
                    ?
                    Object.entries(props.subCategories).map(([key, val], index) => 
                        <SubCollection 
                            subCategoryName={key}
                            parentId={detailId}
                            objects={val as any}
                            key={index + key} />)
                    : null
                }
            </div>
        </details>
    )
}

export { ObjectCollection, CollectionItem }