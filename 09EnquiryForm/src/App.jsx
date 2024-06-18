import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [formData, setFormData] = useState(
    {
      uname: '',
      uemail: '',
      uphone: '',
      umessage: '',
      index: ''
    }
  )

  let getValue = (e) => {
    let oldData = { ...formData }
    let inputName = e.target.name

    let inputValue = e.target.value


    oldData[inputName] = inputValue;
    setFormData(oldData)

  }


  // To Handle Submit Form

  const [userData, setuserData] = useState([])

  let handleSubmit = (e) => {
    e.preventDefault()

    let CurrentuserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    };

    if (formData.index==='') {
      
    

    let checkFilterData = userData.filter((v) => {
      return v.uemail == formData.uemail || v.uphone == formData.uphone
    })
    if (checkFilterData.length == 1) {
      toast.error('Email Already Exist')
    } else {
      let oldUserData = [...userData, CurrentuserFormData] // Old Array Mei Kia Para hai + New Array Element Dala HAi ....
      setuserData(oldUserData)



      setFormData(
        {
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        }
      )
    }
    }else{
      let editIndex = formData.index
      let oldUpdateData = userData;

      let checkFilterData = userData.filter((v,i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) 
      && i!=editIndex)

      if(checkFilterData.length==0){


      oldUpdateData[editIndex]['uname']= formData.uname
      oldUpdateData[editIndex]['uemail']=formData.uemail
      oldUpdateData[editIndex]['uphone']=formData.uphone
      oldUpdateData[editIndex]['umessage']=formData.umessage
      setuserData(oldUpdateData)
      setFormData(
        {
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        }
      )
    }else{
      toast.error("Email Already Exist....")
    }
    }


    // let oldUserData = [...userData, CurrentuserFormData] // Old Array Mei Kia Para hai + New Array Element Dala HAi ....
    // setuserData(oldUserData)


    // Form Submit Hony Ky bad PlaceHolder Khali krna

    // setFormData(
    //   {
    //     uname: '',
    //     uemail: '',
    //     uphone: '',
    //     umessage: '',
    //     index: ''
    //   }
    // )

    // Form Submit Hony Ky bad PlaceHolder Khali krna
  }


  let deleteRow = (indexNumber) => { // i aa raha hai Line 132

    let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber)
    // console.log(filterDataAfterDelete)
    toast.success("Data Delete")
    setuserData(filterDataAfterDelete)
    // alert(indexNumber)
  }


  let editRow = (indexNumber)=>{
    let editData = userData.filter((v,i)=>i==indexNumber)[0]
    // console.log(editData)
    editData['index']=indexNumber
    // console.log(editData)
    setFormData(editData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {userData.length}
          <h1>Enquiry Form</h1>
          <label htmlFor="">Name:</label> <br />
          <input type="text" onChange={getValue} value={formData.uname} name='uname' placeholder='Enter Your Name' /><br />
          <label htmlFor="">Email:</label> <br />
          <input type="text" onChange={getValue} name='uemail' value={formData.uemail} placeholder='Enter Your Email' /><br />
          <label htmlFor="">Phone:</label> <br />
          <input type="text" onChange={getValue} name='uphone' value={formData.uphone} placeholder='Enter Your Phone' /><br />
          <label htmlFor="">Message:</label> <br />
          <textarea name="umessage" onChange={getValue} value={formData.umessage} rows={4} cols={20}></textarea> <br />
          <button>
            {formData.index !== '' ? 'Update' : 'Save'}
          </button>
        </form>
      </div>
      <div>
        <table cellPadding={2} border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name:</th>
              <th>Email:</th>
              <th>Phone:</th>
              <th>Message:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {userData.length >= 1 ?

              userData.map((obj, i) => {
                //Key aa rahi hai line 35 Sy
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{obj.uname}</td>
                    <td>{obj.uemail}</td>
                    <td>{obj.uphone}</td>
                    <td>{obj.umessage}</td>
                    <td>
                      <button onClick={()=>{editRow(i)}}>Edit</button>
                      <button onClick={() => { deleteRow(i) }}>Delete</button> // i aa raha hai line 135
                    </td>
                  </tr>
                )
              })


              :
              <tr>
                <td>404 Not Found</td>
              </tr>

            }
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App