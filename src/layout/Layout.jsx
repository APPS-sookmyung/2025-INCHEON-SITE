import {Outlet} from 'react-router-dom';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
