import './App.css';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/not-found' element={<NotFound/>} />
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Navigate replace to='/not-found' />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
