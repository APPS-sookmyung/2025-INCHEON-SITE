import {Outlet} from 'react-router-dom';
import Footer from '@/components/layout/Footer.jsx';
import Header from '@/components/layout/Header.jsx';
import RouteTracker from '../RouteTracker';

const Layout = () => {
  return (
    <>
      <Header />

      {/* GA 페이지뷰 추적기 */}
      <RouteTracker />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
