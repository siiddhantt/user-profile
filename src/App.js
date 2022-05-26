import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Login from './Components/Login';
import { useEffect, useState } from 'react';

function App() {
  let initRow;
  if (localStorage.getItem("rows") === null) {
    initRow = []
  }
  else {
    initRow = JSON.parse(localStorage.getItem("rows"));
  }
  const [rowList, setRows] = useState(initRow);
  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rowList));
  }, [rowList])
  const addRow = (name, genre, rating) => {
    let snum = 1;
    if (rowList.length !== 0) { snum = rowList[rowList.length - 1].sno + 1; }
    let myRow = {
      sno: snum,
      name: name,
      genre: genre,
      rating: rating
    }
    setRows([...rowList, myRow]);
  }
  const onDelete = (row) => {
    setRows(rowList.filter((e) => { return e !== row }))
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home addRow={addRow} rows={rowList} onDelete={onDelete} />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
