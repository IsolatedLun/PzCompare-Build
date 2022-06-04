import ObjectTable from '../modules/Table/ObjectTable'
import fakeData from '../../fakeData.json'
import TextInput from '../modules/Inputs/TextInput';
import Button from '../modules/Buttons/Button';

const Home = () => {
  const objs = fakeData as any;

  return (
    <section className="[ home ] [ grid ] [ gap-3 margin-block-3 text-center ]" data-grid-collapse>
        {
          objs[0] && <ObjectTable idx={1} direction='left' object={objs[0]} diffs={objs.diffs[0]} />
        }

        <div className="[ home-controls ] [ flex-direction-column gap-2 ]">
          <TextInput blockClass='input' />
          <Button 
            blockClass='button' 
            utilClass='margin-inline-auto border-radius-100vw'>
              Compare
          </Button>
          <TextInput blockClass='input' />
        </div>

        {
          objs[1] && <ObjectTable idx={2} direction='right' object={objs[1]} diffs={objs.diffs[1]} />
        }
    </section>
  )
}

export default Home