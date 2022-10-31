import './App.css';
// import Banner from './component/banner/Banner';
import Navbar from './component/navigationBar/Navbar';
// import ProductList from './component/ProductList'
import Footer from './footer/Footer';
import{Routes,Route} from "react-router-dom"
import Home from './component/pages/Home';
import Shop from './component/pages/Shop';
import About from "./component/pages/About"
import Blog from "./component/pages/Blog"
import Contact from "./component/pages/Contact"
import Pages from "./component/pages/Pages"
import Login from "./component/pages/Login"
import Cart from "./component/pages/Cart"
import Wishlist from "./component/pages/Wishlist"

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/pages' element={<Pages/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/wishlist' element={<Wishlist/>}/>
       </Routes>
      
      
      <Footer/>
      </>
   
  );
}
export default App;
