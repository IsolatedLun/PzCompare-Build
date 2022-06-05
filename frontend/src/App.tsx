import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layouts/Home/Home';
import Navbar from './components/layouts/Navbar';
import MasterData from './MasterData.json';

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

        </Routes>
      </div>

    </Router>
  )
}

export default App
