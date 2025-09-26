import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [data, setData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (currentState === 'Signup') {
        response = await axios.post(`${backendUrl}/api/user/register`, data);
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, data);
      }

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        // This will navigate the user to the homepage after successful login/signup
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // This effect will run whenever the token state changes.
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
      </div>
      {currentState === 'Login' ? '' : <input onChange={onChangeHandler} value={data.name} type='text' name='name' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input onChange={onChangeHandler} value={data.email} type='email' name='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={onChangeHandler} value={data.password} type='password' name='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {currentState === 'Login'
          ? <p onClick={() => setCurrentState('Signup')} className='cursor-pointer'>Create Account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 mt-8 py-2' >{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;
