import React from 'react'
import '../styles/Page.css'
import error from './image/error.jpg';
import {useNavigate} from 'react-router-dom';

function PageNotfound() {

  const goback = useNavigate();
  return (
    <div className='error-container container w-100 h-100'>
      <div className='error-childcontainer d-flex align-items-center justify-content-center  w-100 h-100'>
        <div className='error-nestedchail shodow-lg  w-100  bg-white d-flex  align-items-center flex-column'>
          <div className='error-heading w-100 text-center  p-3 '>
            <h1 >404 - Page Not Found</h1>
          </div>
          <div className='error-information   w-75 p-2 text-center  justify-content-arround align-items-start   d-flex flex-row'>
            <div className='error-img w-50   '>
              <img src={error} alt=''   />
            </div>
            <div className='error-info w-100 d-flex  justify-content-center  align-items-center  text-center'>
              <div className=' w-100 d-flex flex-column '>
                <div className='100'>
                  <h5 className='p-3 '> Oops! The page You're looking for doesn't exist.</h5> 
                </div>
                <div className='w-100'>
                  <button className='p-2 rounded-3  text-white fs-5' onClick={()=>goback('/')}>Go to Home Page</button>
                  </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PageNotfound