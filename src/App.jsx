import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import SpaceListPage from './pages/SpaceListPage';
import Layout from './layout/Layout';
import SurveyPage from './pages/SurveyPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ComingSoonMainPage from './pages/ComingSoonMainPage';
import EventsPage from './pages/EventsPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='spaces' element={<SpaceListPage />} />
        <Route path='space/:id' element={<SpaceDetailPage />} />
        <Route path='events' element={<ComingSoonPage />} />
        <Route path='survey' element={<ComingSoonPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
