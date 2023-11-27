import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteTask, editTask } from './features/slice';
const ToDoList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todo)
  const [addata, setAddData] = useState("");
  const [edit, setEdit] = useState(null);
  const submit = () => {
    if (!addata) {
      alert("Add")
    } else {
      dispatch(addData(addata));
      setAddData("")
    }
  }
  const editbtn=()=>{
    if (edit !== null) {
      dispatch(editTask({ id: edit, text: addata }));
      setEdit(null);
    }
  }
  const handleedit = (id, text) => {
    setAddData(text)
    setEdit(id)
  }
  const handledelet = (id) => {
    dispatch(deleteTask(id))
    console.log(id);
  }

  return (
    <div style={{ backgroundColor: "#976bff"}}>
      <div style={{ backgroundColor: "#976bff", width: '100%',height:"100vh", textAlign: "center", display: 'flex', justifyContent: "center", alignItems: "center", color: 'white' }}>
        <div className='d-flex' style={{ width: "50%", backgroundColor: "#281738", justifyContent: "center", }}>
          <div>
            <div>
              <h1 style={{ fontSize: "5rem", fontFamily: "sans-serif" }}>Get Things Done!</h1>
            </div>

            <input onChange={(e) => { setAddData(e.target.value) }} className='input p-4 mb-4 w-75' value={addata} style={{ height: "2.5rem", borderRadius: "5px", borderColor: "white" }} placeholder='What Is The Task Today?' type="text" />
            {edit===null?(<button
  onClick={submit}
  className='mx-3'
  style={{
    backgroundColor: "#976bff",
    height: "3rem",
    borderRadius: "40%",
    color: "white",
    fontWeight: "bold",
    border: "none",
    padding: "0 20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  }}
>
  Add Task
</button>
):(<button onClick={editbtn} className='mx-3' style={{ backgroundColor: "#976bff", height: "3rem",
borderRadius: "40%",
color: "white",
fontWeight: "bold",
border: "none",
padding: "0 20px",
cursor: "pointer",
transition: "background-color 0.3s",
}}>Edit Task</button>)}
            <div style={{ textAlign: "center" }}>
              {data.map((item, index) => (
                <div key={item.id || index} className='mt-4 mb-2 p-2' style={{ backgroundColor: "#976bff", borderRadius: "5px", justifyContent: "space-around", display: "flex", alignItems: "center" }}>
                  <h1>{item.text}</h1>
                  <div>
                     <FaEdit className='mx-4' onClick={() => handleedit(item.id, item.text)} />
                     <MdDelete onClick={() => { handledelet(item.id) }} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ToDoList