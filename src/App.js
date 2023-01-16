import './App.css';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Register from './screens/Register';
import Login from './screens/Login';


function App() {
  return (
    <div className="App">
      <Router>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/cart' element={<CartScreen/>} />
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/not-found' element={<NotFound/>} />
        <Route path='*' element={<Navigate replace to='/not-found' />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
