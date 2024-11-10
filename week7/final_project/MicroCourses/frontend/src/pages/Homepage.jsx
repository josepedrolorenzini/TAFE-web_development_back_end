import { useState , useEffect } from "react" ;
import axios from "axios" ;
import { NavLink } from "react-router-dom";

function Homepage({title}) {
  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() =>{
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5050/courses')
                setData(response.data)
                console.log(response.data)
                return response.data;
            } catch (error) {
                console.error(error)
            }
        }
        fetchCourses().finally(setLoading(false));
       },[])
  return (
    <>
    home
    {loading && <div>Loading...</div>}


        {data.map((e)=> {
          return (
            <div class="bg-turquoise">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              {e.title}
              </h2>
             
              <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
             
              
                <div class="group relative">
             
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={e.image}
                    alt={e.category}
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" 
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        
                      <p    class="mt-1 text-sm text-gray-500"> 
                      {e.description}
                       </p>
                    </div>
                  </div>
                
                </div> 
              </div>
              <div className="mt-6">
                 <NavLink
                     to={`/courses/${e._id}`}
                     className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm mt-8">
                     Read More
                   </NavLink>
                 </div>
            </div>
          </div>
          )

                 
        })}
    
    </>
  )
}

export default Homepage