import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Props_MasterData } from '../../../types'
import { collapseText, propOrDefault, safeUrlDecode } from '../../../utils/funcs'
import ObjectTable from '../../modules/Table/ObjectTable'

const ObjectView = (props: Props_MasterData) => {
    const [searchParams] = useSearchParams();
    let itemName = propOrDefault(searchParams.get('name'), '') as string;
    itemName = safeUrlDecode(itemName)

    const object = props.masterData.objects[itemName];

    return (
        <div className='[ text-center margin-block-2 ]'>
            <ObjectTable 
                direction='left'
                objectName={itemName}
                onlyShowDiffs={false} 
                idx={0} 
                data={{ object: object, diffs: {}, avgPct: 0 }} />
        </div>
    )
}

export default ObjectView