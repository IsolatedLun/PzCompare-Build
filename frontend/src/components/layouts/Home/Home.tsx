import ObjectTable from '../../modules/Table/ObjectTable'
import HomeMiddleSection from './HomeMiddleSection';
import { randomArrLen } from '../../../utils/funcs';
import { Props_Home } from './types';
import { useState } from 'react';

const Home = (props: Props_Home) => {
  const { objects, names } = props.masterData;

  const [xObjText, setXObjText] = useState('');
  const [yObjText, setYObjText] = useState('');

  function compareObjects() {
    if(xObjText.length > 0 && yObjText.length > 0) {
      
    }
  }

  return (
    <section 
      className="[ home ] [ grid ] [ width-100vw gap-3 margin-block-3 text-center ]" 
      role='Home section'
      data-grid-collapse>
        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName={xObjText}
          idx={1} 
          direction='left' 
          data={{
            object: objects.tomato,
            diffs: {'Proteins': 80}
          }} 
          />

        <HomeMiddleSection 
          xObjVal={xObjText}
          yObjVal={yObjText}

          xObjSetter={setXObjText}
          yObjSetter={setYObjText}
          compareFunction={compareObjects}
        />

        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName={yObjText}
          idx={2} 
          direction='right' 
          data={{
            object: objects.cabbage,
            diffs: {"Carbohydrates": 100}
          }} 
          />
    </section>
  )
}

export default Home