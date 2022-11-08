import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

export const Pfp = () => {
  return (
    <div className='flex flex-col w-[550] h-[600] bg-slate-800 mt-12 rounded-lg shadow-xl py-6 px-9'>

      <div className='flex flex-row mb-8 mt-2'>
        <div className='px-12 py-12 border-4 border-stone-400 rounded-full'>
            <FaUserAlt className='h-32 w-32 text-neutral-900'/>
        </div>
        <div className='flex flex-col ml-6'>
          <h2 className='text-white text-3xl font-bold mb-2'>John Doe</h2>
          <p className='text-blue-500 text-md font-semibold'>@github</p>
          <span className='font-semibold text-gray-300 text-xl py-12'>This user has no bio.</span>
        </div>
      </div>

        <div className='flex flex-row py-4 px-16 gap-12 bg-slate-900 rounded-lg'>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Following:</p>
            <span className='text-2xl font-bold text-white'>56</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Repositories:</p>
            <span className='text-2xl font-bold text-white'>21</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Followers:</p>
            <span className='text-2xl font-bold text-white'>226</span>
          </div>
        </div>    
    </div>
  )
}
