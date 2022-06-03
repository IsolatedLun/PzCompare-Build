import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import ObjectTable from './components/modules/Table/ObjectTable';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='[ margin-3 ]'>
        <ObjectTable />
      </section>
      <Routes>


      </Routes>

    </Router>
  )
}

export default App
