import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import SpaceListPage from './pages/SpaceListPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import Layout from './layout/Layout';
import EventsPage from './pages/EventsPage';
import useScrollToTop from './hooks/useScrolltoTop';

const Root = () => {
  useScrollToTop();
  return <Layout />;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path='spaces' element={<SpaceListPage />} />
        <Route path='space/:id' element={<SpaceDetailPage />} />
        <Route path='events' element={<EventsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
