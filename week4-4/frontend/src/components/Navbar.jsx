import { NavLink } from 'react-router-dom';
import '../assets/css/Luxstyle.css'
 
  function Navbar() {

    let navBarObject = [
      { id: 1, name: 'home',        link: '/' },
      { id: 2, name: 'about',    link: '/about' },
      { id: 3, name: 'contact', link: '/contact' }
    ];

  
    return (
        <div className="container">
         
        <nav className="breadcrumb">
            {navBarObject.map((item) => (
                <li key={item.id}>
                    <NavLink to={item.link}>
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </nav>
        </div>

    );
  }
  
  export default Navbar;
  

// let resources ={
//     links:[
//        'https://reactrouter.com/en/main/routers/create-browser-router' ,
//         ' https://reactrouter.com/en/main/routers/create-browser-router' ,
//         'https://github.com/bradtraversy/react-crash-2024/blob/main/src/App.jsx'
//     ]
// }  
