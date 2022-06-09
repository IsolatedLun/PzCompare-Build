import ObjectTable from '../../modules/Table/ObjectTable'
import HomeMiddleSection from './HomeMiddleSection';
import { randomArrLen } from '../../../utils/funcs';
import { Props_Home } from './types';
import { useEffect, useState } from 'react';
import { Props_Object } from '../../modules/Table/types';
import { useObjects } from '../../../hooks/useObjects';
import { Props_MasterData } from '../../../types';

const Home = (props: Props_MasterData) => {
  const { objects, names } = props.masterData;
  const [
    [xText, yText, xTextSetter, yTextSetter],
    [xObjSetter, yObjSetter, compareObjs],
    [xObj, yObj]
  ] = useObjects(objects);

  return (
    <section 
      className="[ home ] [ grid ] [ width-100vw gap-3 margin-block-3 text-center ]" 
      role='Home section'
      data-grid-collapse>
        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName={xText}
          idx={1} 
          direction='left' 
          data={xObj} 
          />

        <HomeMiddleSection 
          xObjVal={xText}
          yObjVal={yText}

          xObjSetter={xTextSetter}
          yObjSetter={yTextSetter}
          compareFunction={compareObjs}
        />

        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName={yText}
          idx={2} 
          direction='right' 
          data={yObj} 
          />
    </section>
  )
}

export default Home