import React from 'react'

export default function TodoItem(props) {
  return (
    <div className='container flex flex-col flex-wrap justify-center gap-8 rounded-xl border-blue-800 bg-blue-200 mb-2 shadow'>
      <div className='flex flex-wrap justify-between items-center gap-8 p-2 '>
        <div className='flex md:order-2 gap-x-16'>
          <div className='py-3 gap-8'>
            <label className="block  text-slate-500" htmlFor="name"> S.No. </label>
            <div><h5 className='text-2xl font-bold'>{props.row.sno}</h5></div>
          </div>
          <div className='py-3 gap-8'>
            <label className="block  text-slate-500" htmlFor="name"> Name </label>
            <div><h5 className='text-2xl font-bold'>{props.row.name}</h5></div>
          </div>
          <div className='py-3 gap-8'>
            <label className="block  text-slate-500" htmlFor="name"> Genre </label>
            <div><h5 className='text-2xl font-bold'>{props.row.genre}</h5></div>
          </div>
          <div className='py-3 gap-8'>
            <label className="block  text-slate-500" htmlFor="name"> Rating </label>
            <div><h5 className='text-2xl font-bold'>{props.row.rating}</h5></div>
          </div>
        </div>
        <div className='flex md:order-2 justify-content-end'>
          <div className="my-auto flex">
            <button
              className="w-full px-4 py-2.5 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-red-600 hover:bg-red-700 focus:ring-red-800 shadow-lg " onClick={() => { props.onDelete(props.row) }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
