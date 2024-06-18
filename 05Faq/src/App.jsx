import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    const notify = () => toast("Wow so easy!")
  // const [showAndId, setsetshowAndId] = useState(question[0].id)
  return (
    <div>
      <ToastContainer/>
      <button onClick={notify}>Save</button>
    </div>
  )
}

export default App