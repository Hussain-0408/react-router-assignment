import React from 'react';
import img1 from '../components/image/img1.jpg';

function Home() {
  return (
    <div>
        <div className='app-image' style={{ backgroundImage: `url(${img1})` }}>
      </div>
    </div>
  )
}

export default Home