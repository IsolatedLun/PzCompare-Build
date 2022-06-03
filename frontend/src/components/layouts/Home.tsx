import ObjectTable from '../modules/Table/ObjectTable'
import fakeData from '../../fakeData.json'
import TextInput from '../modules/Inputs/TextInput';

const Home = () => {
  const objs = fakeData as any;

  return (
    <section className="[ home ] [ grid ] [ margin-block-3 text-center ]" data-box-collapse>
        {
          objs[0] && <ObjectTable direction='left' object={objs[0]} diffs={objs.diffs[0]} />
        }

        <div className="home-controls">
          <TextInput />
        </div>

        {
          objs[1] && <ObjectTable direction='right' object={objs[1]} diffs={objs.diffs[1]} />
        }
    </section>
  )
}

export default Home