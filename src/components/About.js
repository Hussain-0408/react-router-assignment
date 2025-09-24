import React from 'react'
import img8 from '../components/image/img8.jpg';
import img9 from '../components/image/img9.jpg';
import img10 from '../components/image/img10.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className=' about-container w-100 h-100'>
      <div className='image-container  '>
        <img src={img8} alt='' />
      </div>
      <div className="overlay d-flex flex-column justify-content-center align-items-center">
        <h1 className=' text-black fs-1  text-center p-4'> About Us</h1>
      </div>
      <div className=" my-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="p-3  ms-6">
             
              <p className="text-muted w-100 " style={{ lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center ">
            <img src={img9} alt="about" className="w-100 img-fluid rounded shadow-lg" />
          </div>
        </div>
      </div>

       <div className=" my-3">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img src={img10} alt="about" className="w-100 img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <div className="p-3 ">
             
              <p className="text-muted w-100" style={{ lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default About