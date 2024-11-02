import React , { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'

function login(props) {
  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('') ; 
  const [error, setError] = useState(null) ;
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
        e.preventDefault()  ;
        console.dir(e.target);

        // TODO: Send the form data to the server
        if(email != "jose@marble.com") {
          setError("Invalid email") ;
          return ;
        }
        if(password!= "1234") {
          setError("Invalid password") ;
          return ;
        }

        navigate('/dashboard');

        // try {
        //   const response = await axios.post('http://localhost:5000/api/login', { email, password });
        //   const { token } = response.data;
        // } catch (error) {
        //   throw new Error(error.message) ;
        // }


         // Here you would normally handle authentication
          console.log('Email:', email);
          console.log('Password:', password);

    // Reset fields
    setEmail('');
    setPassword('');
    setError('');
  }
  return (
    <>
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=white&shade=600"
          className="mx-auto h-10 w-auto"
        />
         <h3>{props.title}</h3>
        <p>{email}</p>
         <p className='text-red font-medium'  >{error && error}</p>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="myForm" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) =>{setEmail(e.target.value)}}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-white-600 hover:text-white-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) =>{setPassword(e.target.value)}}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              name="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-green-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-yellow-600 hover:text-yellow-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  </>
  )
}

login.propTypes = {
  title: PropTypes.string,
  actionLink: PropTypes.object
}

export default login
