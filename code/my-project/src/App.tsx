import {Route, Routes, useNavigate } from "react-router-dom"
import Attendance from "./attendance";
import Teacher from "./teacher";
import Login from "./login";

function App() {
  const navigate = useNavigate();
  return (
    <>
    <Routes>
      <Route path="/" element={<div>    <button onClick={()=>{navigate('/attendance')}}>attendance</button>
    <button onClick={()=>{navigate('/login')}}>login</button>
    <button onClick={()=>{navigate('/teacher')}}>teacher</button></div>}/>
      <Route path="/attendance" element={<Attendance/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App