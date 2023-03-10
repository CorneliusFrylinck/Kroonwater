import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Pages/Landing/landingPage';
import Navbar from './Components/Layout/navbar';
import Footer from './Components/Layout/footer';
import ContactPage from './Components/Pages/Contact/contactPage';
import DisclaimerPage from './Components/Pages/Disclaimer/disclaimerPage';
import ProductListPage from './Components/Pages/Product/productListPage';
import ProductPage from './Components/Pages/Product/productPage';
import ServicesPage from './Components/Pages/Service/servicesPage';
import WhyUseUsPage from './Components/Pages/WhyUseUs/whyUseUsPage';
import ScrollToTop from './Components/Helpers/ScrollToTop';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className='nav-bar-placeholder'></div>
      <ScrollToTop />
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
    </div>
  );
}

export default observer(App);
