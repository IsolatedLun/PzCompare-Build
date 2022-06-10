import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dictionary from './components/views/DictionaryView/Dictionary';
import Home from './components/views/HomeView/Home';
import Navbar from './components/layouts/Navbar/Navbar';
import MasterData from './data/MasterData.json';

function App() {
  const masterData = MasterData;

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
