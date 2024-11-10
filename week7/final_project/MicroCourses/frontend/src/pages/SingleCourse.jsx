import { useParams , useLoaderData , Link, useNavigate} from 'react-router-dom' ;


function SingleCourse({id}) {
    const  {_id} = useParams();
    const course = useLoaderData();
     
     if(!course){
         return <h2  className='text-cyan-950 font-bold '>Loading...</h2>
              }

     const navigate = useNavigate();
     const handleBackClick = () => navigate(-1); // Navigate back to previous page
    
    console.log("Course ID:", _id);
    console.log("Course data:", course);


  return (
    <>
    <h1 className='text-cyan-950 font-bold'> Course Details</h1>
    <div>
    <b>{course.title}</b>
    <p>{course.description}</p>
    <img src={course.image} ></img>
    </div>
    <Link to="/courses" className='text-cyan-950 hover:text-cyan-800'>Back to Home</Link>
    </>
  )
}

const courseLoader = async ({ params }) => {
    const { _id } = params;
    const response = await fetch(`http://localhost:5050/courses/${_id}`);
    if (!response.ok) throw new Error("Course not found");
    const data = await response.json();
     return data;
  };
  
  export  { SingleCourse as default, courseLoader };

