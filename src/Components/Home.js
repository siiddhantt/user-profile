import React from 'react'
import Todos from './Todos';
import AddRow from './AddRow';

function Home(props) {
  return (
    <>
    <Todos title="Your Watchlist" rows={props.rows} onDelete={props.onDelete}/>
    <AddRow addRow={props.addRow}/>
    </>
  )
}

export default Home
