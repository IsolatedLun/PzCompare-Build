import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dictionary from './components/views/DictionaryView/Dictionary';
import Home from './components/views/HomeView/Home';
import Navbar from './components/layouts/Navbar/Navbar';
import MasterData from './data/MasterData.json';
import { Props_MasterData } from './types';

function App() {
  const masterData = MasterData as any;

  return (
    <Router>
      <Navbar />
      
      <div className="main-container">
        <Routes>
          <Route 
            path=''
            element={<Home masterData={masterData} />}  />

          <Route 
            path='dictionary'
            element={<Dictionary masterData={masterData} />}  />

        </Routes>
      </div>

    </Router>
  )
}

export default App
