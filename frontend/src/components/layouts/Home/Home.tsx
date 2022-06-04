import ObjectTable from '../../modules/Table/ObjectTable'
import fakeData from '../../../fakeData.json'
import HomeMiddleSection from './HomeMiddleSection';

const Home = () => {
  const objs = fakeData as any;

  return (
    <section className="[ home ] [ grid ] [ gap-3 margin-block-3 text-center ]" data-grid-collapse>
        <ObjectTable 
          idx={1} 
          direction='left' 
          data={
            objs[0] ? { object: objs[0], diffs: objs.diffs[0] } : undefined
          } 
          />

        <HomeMiddleSection />

        <ObjectTable 
          idx={2} 
          direction='right' 
          data={
            objs[1] ? { object: objs[1], diffs: objs.diffs[1] } : undefined
          } 
          />
    </section>
  )
}

export default Home