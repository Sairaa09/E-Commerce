import React from 'react'

const NewsLetterBox = () => {
    const sumbitHandler=(e) => {
      e.preventDefault();
      e.target.reset();
    }
    
  return (
    <div className='text-center'>
      <div className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </div>
      <p className="mt-3 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          
        </p>
        <form onSubmit={sumbitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-300'>
            <input type="email"  placeholder='Enter your email' required className='w-full sm:flex-1 outline-none' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
