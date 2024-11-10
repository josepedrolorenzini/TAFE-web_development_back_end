import axios from 'axios';
import {FaMapMarked, FaSpinner} from 'react-icons/fa'
import { Link , NavLink, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
 

function Courses({title}) {
        const [courses , setCourses] = useState([]) ;
        const [showFullDescription, setShowFullDescription] = useState(false);
        const [loading, setLoading] = useState(true);

       useEffect(() =>{
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5050/courses')
                setCourses(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCourses().finally(setLoading(false));
       },[])


    // showing full description or less description
    // let description = courses.description  ;
    // if(!showFullDescription) {
    //     description = description.substring(0, 90) + '...';
    // }

  return (
    <> { loading ?   <Spinner loading={loading} /> :
      <div className='container mx-auto'>
      <h1>{title}</h1>
       {courses.map( (course) =>{
           
           return (
               
               <div className="bg-white rounded-xl shadow-md relative" key={course._id}> 
               <div className="p-4">
                 <div className="mb-6">
                   <div className="text-gray-600 my-2">{course.type}</div>
                   <h3 className="text-xl font-bold">{course.title}</h3>
                 </div>
   
                 <div className="mb-5">
                   {course.description}
                 </div>
                 
                 <h3 className="text-indigo-500 mb-2">${course.price} AUD</h3>
                 <button 
               //  onClick={() => {setShowFullDescription(( prevState => !prevState))}}
                 className="text-indigo-500 hover:text-indigo-60"
                 >
                   {showFullDescription ? "Less" : 'Read more'}
                 </button>
   
   
                 <div className="border border-gray-100 mb-5"></div>
   
                 <div className="flex flex-col lg:flex-row justify-between mb-4">
                   <div className="text-orange-700 mb-3">
                     <FaMapMarked className='inline text-lg mg-1'/>
                    
                   </div>
                   <NavLink
                    // to={window.location.pathname.includes("courses") ? `${course.id}` : `courses/${course.id}`} 
                  //   to={location.pathname === "/" ? `/courses/${course._id}` : `${course._id}`}
                     to={`/courses/${course._id}`}
                     className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                     Read More
                   </NavLink>
                 </div>
               </div>
             </div>
            
               )
               
            })}
               </div>
    }
        
        </>
  )
}
 

export default Courses
