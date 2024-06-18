import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const [todoList, settodoList] = useState([])
  

  const saveTodoList = (e) => {

    let todo = e.target.todo.value

    if (!todoList.includes(todo)) {
      let finalTodo = [...todoList, todo]
      settodoList(finalTodo)
    } else {
      toast("Task Already Added");
    }

    e.preventDefault()
  }

  let list = todoList.map((value, index) => {
    return (
      <Todolistitem value={value}
        key={index} indexNumber={index}
        todoList={todoList}
        settodoList={settodoList}
      />
    )
  })

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" placeholder='Add Your Task' name='todo' /> <button>Add Task</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
      <ToastContainer />
    </>
  )
}

export default App


function Todolistitem({ value, indexNumber,todoList, settodoList }) {
  const [status, setstatus] = useState(false)
  let deleteRow = ()=>{
    let finalData = todoList.filter((v,i)=>i!=indexNumber)
    settodoList(finalData)
  }
  let checkStatus = ()=>{
    setstatus(!status)
  }
  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}