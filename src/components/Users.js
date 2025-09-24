import React from 'react'
import '../styles/Users.css'
import img7 from '../components/image/img7.jpg'
function Users() {

  const information = [
    {
      name: "Althaf Hussain",
      Age: "24",
      birth: "April 4,2000",
      occupation: "Software Developer",
      Location: "Anywhere , Hyd",
      img : img7
    }
  ]

  return (
    <div className='user-container container-fluid   w-100 h-100 ' >
      
      <div className='user-childcontainer   d-flex  align-items-center justify-content-center ' >
        <div className=' user-childcontainer1 justify-content-center  shadow-lg  bg-white flex-column rounded-3 p-4 d-flex align-items-center '>
          
          <div className='user-image w-100 mt-0  text-center p-2  rounded-2'>
            <img src={information[0].img}  alt={information[0].name} className='mt-0' />
          </div>
          <div className='user-name w-100  text-center p-2'>
            <h3 className='fs-2'>{information[0].name}</h3>
          </div>
          <div className='user-information w-100 text-center p-2 lh-1  '>
            <h5 >Age : {information[0].Age}  </h5>
            <h5 >Date of Birth: {information[0].birth} </h5>
            <h5>Occupation: {information[0].occupation}</h5>
            <h5>Location: {information[0].Location}</h5>
          </div>
          <div className='user-work  d-flex text-center p-1'>
            <p >Althaf is Passionate software developer with a nanack for intiutive user experiences and building robost applications.</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Users