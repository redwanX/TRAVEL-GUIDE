import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
