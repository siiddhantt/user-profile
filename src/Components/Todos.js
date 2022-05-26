import React from 'react'
import TodoItem from '../Components/TodoItem'

export default function Todos(props) {
  let myStyle = {
    backgroundColor: "",
    padding: "5px",
    fontFamily: ""
  }
  return (
    <div className="container text-center rounded-sm mx-auto gap-4">
      <div className='mt-1 mb-4 border rounded-xl bg-slate-700'><h3 className='my-3 rounded-sm text-white text-2xl underline font-medium' style={myStyle}> {props.title}  </h3></div>
      {props.rows.length === 0 ? "The list is empty :(" :
        props.rows.map((rowLoop) => {
          return <><TodoItem row={rowLoop} key={rowLoop.sno} onDelete={props.onDelete} /></>
        })}
    </div>
  )
}