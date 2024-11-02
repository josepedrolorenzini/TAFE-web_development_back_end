import {useEffect , useState} from 'react'

function users() {

    const [users, setUsers] = useState([]) ;
    const [data , setData] = useState([]);

    const fetchData = async () =>{
        let data = await fetch("http://localhost:8000/users",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let response = await data.json();
        setData(response);
    }

    useEffect(() => {
        
    //     return (
    //          // setData([]);
    //   //    console.log(data)
    //   //fetchData()
    //     ) 
           
         fetchData();
    }, []);
   console.log(data)
  return (
    <>
    Json Server users
    <div className="container mx-auto">

    {data.map(user => {
        return (
            <div key={user.id}>
                <h2>{user.password}</h2>
                <p>{user.email}</p>
            </div>
        )
    })}
    </div>
    </>
  )
}

export default users