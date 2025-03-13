import React, { useState } from 'react'

const Login = () => {

  const [currentState, setcurrentState] = useState('Login')

  const onSubmitHandler= async(e) => {
    e.preventDefault();
    e.target.reset()
  }
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] m-auto sm:max-w-96 mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 scroll-mt-10'>
       <p className='prata-regular text-3xl'>{currentState}</p>
       <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState ==='Login'? ' ': <input required type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' />}
       
        <input required type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' />
        <input required type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password'  />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          { currentState === 'Login'? <p className="cursor-pointer"onClick={()=>setcurrentState('Sign UP')}>Create account</p>:<p className="cursor-pointer"onClick={()=>setcurrentState('Login')}>Login here</p>}
        </div>
        <button className='mt-5 bg-black text-white text-base px-8 py-2 cursor-pointer'>{currentState === 'Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login