import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  const location = useLocation();

  // Define routes where you don't want Header & Footer
  const hideHeaderFooterRoutes = ['/login', '/signup' ,'/admin','/createoffers','/dashboard','/createoffers2','/transactionHistory','/eprAccount','/createOffers3','/dashboard2','/eprAccount2','/eprAccount3','/eprAccount4','/eprAccount5','/eprAccount6','/dashboard3','/createOffer4','/createOffer5','/filter','/navbar'];

  // Check if pathname exactly matches or starts with the restricted route
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
