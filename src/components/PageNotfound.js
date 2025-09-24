import React from 'react'
import '../styles/Page.css'
import error from './image/error.jpg';

function PageNotfound() {
  return (
    <div className='error-container container w-100 h-100'>
      <div className='error-childcontainer d-flex align-items-center justify-content-center  w-100 h-100'>
        <div className='error-nestedchail shodow-lg  w-100  bg-white d-flex  align-items-center flex-column'>
          <div className='error-heading w-100 text-center  p-3 '>
            <h1 >404 - Page Not Found</h1>
          </div>
          <div className='error-information container  w-100 p-2 text-center justify-content-center  d-flex flex-row'>
            <div className='error-img   '>
              <img src={error} alt=''   />
            </div>
            <div className='error-info d-flex w-50  align-items-center text-center'>
              <div className=' w-100 d-flex flex-column align-item-start'>
                <div className='w-100'>
                  <h5 className='p-3'> Oops! The page You're looking for doesn't exist.</h5> 
                </div>
                <div className='w-100'>
                  <button className='p-1 rounded-3 bg-primary text-white fs-5'>Go to Home Page</button>
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