import { useEffect } from "react";
import { NavLink , useParams , useLocation } from "react-router-dom";
 

// Navbar/Navbar.jsx
export default function Navbar({ myNavigation }) {
    
    // const { linkName } = useParams();
    const location = useLocation(); // Get the location object
    const pathname = location.pathname; // Access the pathname
    useEffect(() => {
        //console.log(linkName) ; 
        return console.log(pathname) 
  
    },[pathname])
    return (
      <nav>
        {myNavigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={`${
                pathname == item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } px-3 py-2 rounded-md text-sm font-medium`}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </NavLink>
        ))}

  
      </nav>
    );
  }
  