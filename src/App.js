import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Pages/Landing/landingPage';
import Navbar from './Components/Layout/navbar';
import Footer from './Components/Layout/footer';
import { ContactPage } from '@mui/icons-material';
import DisclaimerPage from './Components/Pages/Disclaimer/disclaimerPage';
import ProductListPage from './Components/Pages/Product/productListPage';
import ProductPage from './Components/Pages/Product/productPage';
import ServicesPage from './Components/Pages/Service/servicesPage';
import WhyUseUsPage from './Components/Pages/WhyUseUs/whyUseUsPage';

function App() {
  return (
    <>
      <Navbar/>
      <div className='nav-bar-placeholder'></div>
      <Routes>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/disclaimer' element={<DisclaimerPage/>}></Route>
        <Route path='/products/:categoryId' element={<ProductListPage/>}></Route>
        <Route path='/product/:productId' element={<ProductPage/>}></Route>
        <Route path='/services' element={<ServicesPage/>}></Route>
        <Route path='/whyUseUs' element={<WhyUseUsPage/>}></Route>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
