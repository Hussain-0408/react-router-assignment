import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import PageNotfound from './components/PageNotfound';

function App() {
 const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path ='*' element ={<PageNotfound /> } />
      </Routes>
      {/* <button onClick={()=> navigateTowhere()}>About</button> */}
       {/* <button onClick={()=> navigateTo('/Contact')}>About</button> */}
        <button onClick={()=>navigate(-1)}> back</button>
      
    </div>
  );
}

export default App;
