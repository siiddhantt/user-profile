import React, { useEffect, useState } from 'react'

function AddRow(props) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const handleAdd = (e) => {
        e.preventDefault();
        if (!name || !genre || !rating) {
            alert("Name, Genre or Rating is missing!")
        }
        else {
            props.addRow(name, genre, rating);
        }
    }
    return (
        <><div className='mt-4 flex flex-col flex-wrap justify-center gap-8 place-content-center'>
            <div className='rounded-xl shadow flex flex-col gap-8 p-2 bg-slate-700'>
                <div className='flex flex-row flex-wrap justify-center gap-8 place-content-center'>
                    <div className="relative">
                        <label className="block text-xs font-medium text-white" htmlFor="name"> Name </label>

                        <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="name" type="text" onChange={(e) => { setName(e.target.value) }}/>
                    </div>
                    <div className="relative">
                        <label className="block text-xs font-medium text-white" htmlFor="genre"> Genre </label>

                        <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="genre" type="text" onChange={(e) => { setGenre(e.target.value) }}/>
                    </div>
                    <div className="relative">
                        <label className="block text-xs font-medium text-white" htmlFor="rating"> Rating </label>

                        <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="rating" type="text" onChange={(e) => { setRating(e.target.value) }}/>
                    </div>
                </div>
                <div className="my-auto mx-auto">
                    <button type="button"
                        className="w-full px-4 py-2.5 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 shadow-lg" onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddRow
