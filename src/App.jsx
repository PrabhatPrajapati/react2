import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
// import './connect.min.css';
// import './custom.css';
// import './dark_theme.css';

function App() {
  const location = useLocation();

  // Define routes where you don't want Header & Footer
  const hideHeaderFooterRoutes = ['/login', '/signup'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;