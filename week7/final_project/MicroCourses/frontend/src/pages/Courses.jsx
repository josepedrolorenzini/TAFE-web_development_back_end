import axios from 'axios';
import { useEffect, useState } from 'react';
 

function Courses({title}) {
        const [courses , setCourses] = useState([])

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
        fetchCourses()
       },[])


  return (
    <>
        <div className='container mx-auto'>
       <h1>{title}</h1>
        Courses
        {courses.map( (course) =>{
            
            return (
                
            <p key={course._id}>
               <h1> {course.title}</h1>
                <h3> {course.description}</h3>
                </p>
             
                )
                
             })}
                </div>
        </>
  )
}
 

export default Courses
