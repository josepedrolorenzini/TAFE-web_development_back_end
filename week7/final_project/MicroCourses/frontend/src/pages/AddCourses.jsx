import { useState } from "react" ; 
import { useNavigate } from "react-router-dom";


const AddCourses = ({addCourseSubmit}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('full stack developer');
  const [instructor, setInstructor] = useState('Jose Lorenzini');
  const [level, setLevel] = useState('Solo Hackers');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration_hours, setDuration_hours] = useState('');
  const [image , setImage] = useState(null); // file
  // const [imageName, setImageName] = useState(null); // filename
  // const [file, setFile] = useState(null);
  // const [uploadedFile, setUploadedFile] = useState({}); // file object
 

  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault();
    try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('instructor', instructor);
    formData.append('level', level);
    formData.append('description', description);
    formData.append('duration_hours', duration_hours);
    formData.append('price', price);
    // formData.append("file", file);
    if(image) formData.append('image', image);  // The image file itself

    // setUploadedImage(image,imageName)


   

     const response = await addCourseSubmit(formData); 

      // Submit the formData to the parent component or API
      if (response) {
        navigate("/courses")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  return (
    <section className="bg-indigo-50">
    <div className="container m-auto max-w-2xl py-2">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitForm} 
         id="subscription" encType="multipart/form-data">

          <h2 className="text-3xl text-center font-semibold mb-6">Add Course</h2>
            {/*  course title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
                Course Title
                </label>
            <input
              category="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Add a Title to your course"
              required
              value={title}
              onChange={((e) => {
                setTitle(e.target.value) ;
                console.log(e.target.value)})}
            />
          </div>
                {/*  course image */}

            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
                Upload image
                </label>
            <input
              id="file"
              name="file"
              className="border rounded w-full py-2 px-3 mb-2"
              type="file"
           
            //  onChange={((e) => {setImage(URL.createObjectURL(e.target.files[0])) , console.log(e.target.files[0].name)})}
              onChange={(e) => {
                // const selectedFile = e.target.files[0];
                // setFile(selectedFile);
                // console.log(selectedFile)

                //setImage(URL.createObjectURL(e.target.files[0])),
                const file  = e.target.files[0] ;
                setImage(file)
              //  setImageName(file.name)
                // setImageName(e.target.files[0].name)
                
              //  setImage(URL.createObjectURL(e.target.files[0])),
              console.log(file)
              console.log(file.name)
              // console.log(URL.createObjectURL(e.target.files[0]))
            
              }}
                required
            />
          </div>
                {/*  course title */}

           {/* course category*/}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                Course Category
              </label>
            <select
              id="category"
              name="category"
              className="border rounded w-full py-2 px-3"
              required 
              value={category}
              onChange={((e) => {setCategory(e.target.value) , console.log(e.target.value)})}
              >
              <option value="full-stack">Full Stack Developer</option>
              <option value="Back-end">Back end</option>
              <option value="front-end">Front End</option>
              <option value="GraphQL">GraphQL</option>
              <option value="Node.js">Node.js</option>
              <option value="Inertia">Inertia.js & Laravel</option>
              <option value="Laravel-PHP">PHP Artisan </option>
            </select>
          </div>
             {/* course category*/}

          {/* instructor */}
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              instructor
            </label>
            <select
              id="instructor"
              name="instructor"
              className="border rounded w-full py-2 px-3"
              required 
              value={instructor}
              onChange={((e) => {setInstructor(e.target.value) , console.log(e.target.value)})}
              >
              <option value="Rendan_Eich">Rendan Eich</option>
              <option value="Linus_Benedict_Torvald">Linus Benedict Torvald</option>
              <option value="jose_lorenzini">Jose lorenzini</option>
              <option value="Rasmus_Lerdorf">Rasmus Lesdorf</option>
              <option value="javier_milei">Javier Milei</option>
              <option value="Milton_Friedman">Milton Friedman</option>
            </select>
          </div> 
          {/* instructor  select*/}

           {/* level */}
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              level
            </label>
            <select
              id="level"
              name="level"
              className="border rounded w-full py-2 px-3"
              required 
              value={level}
              onChange={((e) => {setLevel(e.target.value) , console.log(e.target.value)})}
              >
              <option value="solo-hacker">Solo Hackers</option>
              <option value="Senior">Seniors</option>
              <option value="Intermedia">Intermedia</option>
              <option value="Beginner">Beginners</option>
            </select>
          </div> {/* level */}

              {/* course duration hours*/}
              <div className="mb-4">
            <label 
            htmlFor="price" 
            className="block text-gray-700 font-bold mb-2">
               Duration hours
            </label>
            <input
              id="duration_hours"
              name="duration_hours"
              placeholder="duration hours"
              className="border rounded w-full py-2 px-3"
              value={duration_hours}
              onChange={((e) => {setDuration_hours(e.target.value) , console.log(e.target.value)})}
            />
             
          </div>
           {/* duration_hours */}


             {/* course price*/}
          <div className="mb-4">
            <label 
            htmlFor="price" 
            className="block text-gray-700 font-bold mb-2">
               Course Price
            </label>
            <input
              id="price"
              name="price"
              placeholder="price"
              className="border rounded w-full py-2 px-3"
              value={price}
              onChange={((e) => {setPrice(e.target.value) , console.log(e.target.value)})}
            />
             
          </div>
           {/* course price*/}
 
            {/* course description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
              >Description
              </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any courses duties,  requirements, etc"
              value={description}
              onChange={((e) => {setDescription(e.target.value) , console.log(e.target.value)})}
            ></textarea>
          </div>
               {/* course description */}
          
          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              category="submit">
              Add course
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddCourses