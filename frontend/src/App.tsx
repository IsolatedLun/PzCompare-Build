import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layouts/Home/Home';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="main-container">
        <Routes>
          <Route 
            path=''
            element={<Home />}  />

        </Routes>
      </div>

    </Router>
  )
}

export default App
