// import React from 'react';
// import img1 from '../components/image/img1.jpg';
// import img9 from '../components/image/img9.jpg';
// import '../styles/Home.css';


// function Home() {
//   return (
//     <div className='w-100'>
//       <div className='app-image d-flex w-100 justify-content-center align-items-center' style={{ backgroundImage: `url(${img1})` }}>
//         <img src={img9} alt='' className='w-50 border' />
//         <div className='d=flex bg-white border  w-100 p-1  text-center'>
          
//         </div>
//       </div>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Home



import React from 'react';
import img1 from '../components/image/img1.jpg'; 
import img9 from '../components/image/img9.jpg'; 
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handlechange =(url)=>{
      navigate(url)
  }
  return (
    <div className=" homeroot-container container w-100">

      <div 
        className="home-container d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
        <p className="fs-5 mt-3">We provide the best solutions for your business.</p>
        <button className="btn btn-success btn-lg  mt-3" onClick={()=>handlechange('/about')}>Learn More</button>
      </div>
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h2>Our Services</h2>
            <p className="" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-success text-white mt-3" onClick={()=>handlechange('/about')}>Learn More</button>
          </div>
          <div className="col-md-6 text-center">
            <img src={img9} alt="services" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;



