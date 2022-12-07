import React from 'react';
import './Home.css'
import pp from '../../acc/my port.jpg'
const Home = () => {
    return (
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className='border-2 border-sky-500'>
           <h2>muhii</h2>
           </div>
           
           <div className="avatar  p-8 ">
  <div className="w-3/4 mask  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={pp} alt="" />
  </div>
</div>
            
           

        </div>
    );
};

export default Home;