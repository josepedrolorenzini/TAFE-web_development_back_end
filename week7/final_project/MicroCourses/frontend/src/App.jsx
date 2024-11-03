import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Courses from './pages/Courses';
import NotFoundPage from './pages/NotFoundPage';
import Homepage from './pages/Homepage';
export default function App() {
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout title="Homepage dinamico" />}>
          <Route index element={<Homepage title="homepage"/>} />
          <Route path='/courses' element={<Courses title="cursos"  />} />
          {/* <Route path='/jobs' element={<JobsPage />} />
          <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
          <Route
            path='/edit-job/:id'
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
          <Route
            path='/jobs/:id'
            element={<JobPage deleteJob={deleteJob} />}
            loader={jobLoader}
          /> */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
}
