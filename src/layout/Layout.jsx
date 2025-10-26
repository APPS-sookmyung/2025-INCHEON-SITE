import {Outlet} from 'react-router-dom';
import Footer from '@/components/layout/Footer.jsx';
import Header from '@/components/layout/Header.jsx';

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
