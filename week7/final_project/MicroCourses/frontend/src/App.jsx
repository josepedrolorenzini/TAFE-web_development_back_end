import React from 'react'
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
import AddCourses from './pages/AddCourses';   // This component is not used in the provided code snippet. It's just a placeholder for a future implementation.
import SingleCourse , {  courseLoader } from './pages/SingleCourse';
import axios from 'axios';
export default function App() {
  // adding new course to mongodb from addCourse.jsx
  const addCourse = async (newCourse) => {

    
    try {
            const response = await axios.post("http://localhost:5050/courses/addcourse", newCourse , {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }) ;
            console.log("Response data:", response.data);
            alert("File uploaded, course data saved, and email sent successfully!");
            return response.data;
            
          } catch (err) {
            if (err.response) {
              // Server responded with a status other than 2xx
              console.error('Error creating course:', err.response.data);
            } else if (err.request) {
              // Request was made but no response received
              console.error('No response received:', err.request);
            } else {
              // Something happened in setting up the request
              console.error('Error in setting up the request:', err.message);
            }
            return null;
          }
      }    // addcourses

      /// adding new course to mongodb from addCourse.jsx
      // add new course function 
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout   title="homepage"  />}>
          <Route index element={<Homepage title="homepage" />} />
          <Route path='/courses' element={<Courses title="cursos"  />} />
          <Route path='/courses/:_id' element={<SingleCourse  />} loader={courseLoader}  />
         <Route path='/addcourses' element={<AddCourses addCourseSubmit={addCourse}  title="add courses"/>} /> 
          {/*  <Route path='/addcourses' element={<AddCourses  title="add courses"/>} />*/}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
}
