import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import PageNotfound from './components/PageNotfound';
import Users from './components/Users';




function App() {
  return (
    <div className="App-container container-lg ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      
        <Route path='/Users' element={<Users />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
     

    </div>
  );
}

export default App;
