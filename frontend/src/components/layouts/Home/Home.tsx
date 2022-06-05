import ObjectTable from '../../modules/Table/ObjectTable'
import HomeMiddleSection from './HomeMiddleSection';
import { randomArrLen } from '../../../utils/funcs';
import { Props_Home } from './types';

const Home = (props: Props_Home) => {
  const { objects, names } = props.masterData;

  return (
    <section 
      className="[ home ] [ grid ] [ gap-3 margin-block-3 text-center ]" 
      role='Home section'
      data-grid-collapse>
        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName=''
          idx={1} 
          direction='left' 
          data={{
            object: objects.Bacon,
            diffs: {'Proteins': 80}
          }} 
          />

        <HomeMiddleSection />

        <ObjectTable 
          randomName={names[randomArrLen(names.length)]}
          objectName=''
          idx={2} 
          direction='right' 
          data={{
            object: objects.Potato,
            diffs: {"Carbohydrates": 100}
          }} 
          />
    </section>
  )
}

export default Home