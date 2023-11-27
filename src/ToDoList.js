import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
const ToDoList = () => {
    const [data,setData]=useState([
        {
        title:"hello"
    },
        {
        title:"hello"
    },
        {
        title:"hello"
    },
        {
        title:"hello"
    },
        {
        title:"hello"
    },
])
  return (
    <div>
    <div className='container' style={{ backgroundColor: "#976bff", height: "100vh", width: '100%', textAlign: "center", display: 'flex', justifyContent: "center", alignItems: "center", color: 'white' }}>
      <div className='' style={{ width: "50%", backgroundColor: "#281738", }}>
        <h1 style={{ fontSize: "5rem", fontFamily: "sans-serif" }}>Get Things Done!</h1>
        <input className='input' style={{ height: "2.5rem", width: "30rem", borderRadius: "5px" }} placeholder='What Is The Task Today?' type="text" />
        <button className='p-1' style={{ backgroundColor: "#976bff", height: "2.5rem", borderRadius: "12px" }}>Add Task</button>
        <div className='d-flex' style={{justifyContent:"center"}}>
        {data.map((item) => (
            <div className='d-flex' style={{backgroundColor:"#976bff",borderRadius:"5px" ,width:"72%", margin:"auto"}}>
          <h1 key={item.id}>{item.title}</h1>
          <FaEdit />
          </div>
        ))}
      </div>
      </div>
      
    </div>
  </div>
  )
}

export default ToDoList