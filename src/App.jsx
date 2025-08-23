import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import SpaceListPage from './pages/SpaceListPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<MainPage />} />
        <Route path='spaces' element={<SpaceListPage />} />
        <Route path='spaces/:id' element={<SpaceDetailPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
