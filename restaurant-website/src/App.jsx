import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='menu' element={<Menu />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='cart' element={<Cart />}/>
      </Route>
    </Routes>
  )
} 