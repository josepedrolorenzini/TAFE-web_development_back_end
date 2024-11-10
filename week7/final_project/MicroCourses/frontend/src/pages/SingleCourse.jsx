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
    <div className='mb-4'>
    <b>{course.title}</b>
    <p>{course.description}</p>
    <img src={course.image} 
    className='w-24'></img>
    </div>
    <Link to="/courses" className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm mt-8'>Back to Home</Link>
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

