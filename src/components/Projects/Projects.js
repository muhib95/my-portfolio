import React from 'react';
import project1 from '../../acc/project1.png'
import project2 from '../../acc/project2.png'
import project3 from '../../acc/project3.png'

const Projects = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center text-3xl font-bold my-3'>Recent Project</h1>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center'>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={project1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Clean Teeth
      
    </h2>
    <p>This is a fullstack dentalcare website</p>
    <div className="card-actions justify-center">
       <a className='self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-orange-300 text-black focus:ring-orange-300 hover:ring-orange-400' href="https://dental-care-bf30b.web.app/">Live Website</a>
      
      
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={project2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Bye and sell
      
    </h2>
    <p>This is a MERN Resale products ecomarce website</p>
    <div className="card-actions justify-center">
       <a className='self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-orange-300 text-black focus:ring-orange-300 hover:ring-orange-400' href="https://buy-sell-b4e23.web.app/">Live Website</a>
      
      
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={project3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Tutor Expart
      
    </h2>
    <p>Make your dream Comes True.Study with any teacher anywhere you live</p>
    <div className="card-actions justify-center">
       <a className='self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-orange-300 text-black focus:ring-orange-300 hover:ring-orange-400' href="https://tutor-expert.web.app/">Live Website</a>
      
      
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Projects;