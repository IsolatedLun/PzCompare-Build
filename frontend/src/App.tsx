import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dictionary from './components/views/DictionaryView/Dictionary';
import Home from './components/views/HomeView/Home';
import Navbar from './components/layouts/Navbar/Navbar';
import MasterData from './data/MasterData.json';
import { Props_MasterData } from './types';
import { useEffect } from 'react';
import { openNestedDetails } from './utils/funcs';
import ObjectView from './components/views/ObjectView/ObjectView';
import Datalist from './components/modules/Datalist/Datalist';
import Footer from './components/layouts/Footer/Footer';

function App() {
  const masterData = MasterData as any;

  useEffect(() => {
    window.addEventListener('hashchange', (e) => {
      const id = location.hash.substring(1);
      
      if(id)
        openNestedDetails(id, id);
    })
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Datalist id='object-list' list={masterData.names} />
        
        <main className="main-container">
          <Routes>
            <Route 
              path=''
              element={<Home masterData={masterData} />}  />

            <Route 
              path='dictionary'
              element={<Dictionary masterData={masterData} />}  />

            <Route 
              path='view'
              element={<ObjectView masterData={masterData} />}  />

          </Routes>
        </main>
      </div>

      <Footer />

    </Router>
  )
}

export default App
