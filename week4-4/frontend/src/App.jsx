import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom';
import Homepages from './pages/Homepages';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements([
        // eslint-disable-next-line react/jsx-key
        <Route path="/" element={<MainLayout />} >
            <Route index   element={<Homepages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
        </Route>
      ])
    );

    return (
      <RouterProvider router={router} />
    );
  }
 

export default App;
