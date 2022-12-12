import React from 'react'
import { MdPlace } from 'react-icons/md'
import { BiLink } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'

export const Pfp = (props) => {
  return (
    <div className='flex flex-col w-[550] h-[600] bg-slate-800 mt-12 rounded-lg shadow-xl py-6 px-9'>

      <div className='flex flex-row mb-8 mt-2'>
        <div className='h-44 w-44 border-4 flex items-center border-stone-400 rounded-full'>
            <img className='rounded-full py-1 px-1 m-auto' src={props.avatar}></img>
            <FaUserAlt className='h-full w-full px-6 mr-1 text-zinc-900'/>
        </div>
        <div className='flex flex-col ml-6 justify-center'>
          <h2 className='text-white text-3xl font-bold mb-2'>{props.name}</h2>
          <p className='text-blue-500 text-md font-semibold'>{props.login}</p>
          <span className='font-semibold text-gray-300 text-xl py-12 max-w-sm'>{props.bio}</span>
          <div className='flex flex-row items-center justify-center'>
            <MdPlace className='text-3xl text-gray-200 mr-2'/>
            <span className='text-gray-400 mr-3'>{props.location}</span>
            <BiLink className='text-3xl text-gray-200 mr-2'/>
            <span className='text-gray-400'>{props.url}</span>
          </div>
        </div>
      </div>

        <div className='flex flex-row py-4 px-16 gap-12 bg-slate-900 rounded-lg shadow-xl'>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Following:</p>
            <span className='text-2xl font-bold text-white'>{props.following}</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Repositories:</p>
            <span className='text-2xl font-bold text-white'>{props.public_repos}</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-gray-400'>Followers:</p>
            <span className='text-2xl font-bold text-white'>{props.followers}</span>
          </div>
        </div>    
    </div>
  )
}
