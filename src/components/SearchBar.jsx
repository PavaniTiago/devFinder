import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
    <input
        className='w-[530px] h-16 rounded-lg px-6 bg-slate-800 text-slate-200 text-lg shadow-xl mr-3'
        type="text"
        placeholder="Procure um Perfil GitHub" />
        <button className='text-4xl text-gray-200 bg-blue-600 rounded-full w-14 h-14 shadow-xl hover:bg-blue-500'>
          <AiOutlineSearch className='m-auto'/>
        </button>
    </div>
  )
}
