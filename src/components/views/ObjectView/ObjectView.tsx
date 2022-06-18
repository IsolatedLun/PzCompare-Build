import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Props_MasterData } from '../../../types'
import { collapseText, propOrDefault } from '../../../utils/funcs'
import ObjectTable from '../../modules/Table/ObjectTable'

const ObjectView = (props: Props_MasterData) => {
    const [searchParams] = useSearchParams();
    const itemName = propOrDefault(searchParams.get('name'), '') as string;
    const object = props.masterData.objects[collapseText(itemName)];

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