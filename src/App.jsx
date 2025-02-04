import
{ BrowserRouter, Routes, Route }from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/about';
import Profile from './pages/Profile';

export default function App()
{
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/Signin' element={<Signin />}/>
  <Route path='/Signup' element={<Signup />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/Profile' element={<Profile />}/>
  </Routes>
  </BrowserRouter>);
}