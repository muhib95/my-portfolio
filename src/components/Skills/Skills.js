import React from 'react';

const Skills = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center text-3xl font-semibold'>Professional Skills</h1>
          
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
  <div className="card-body">
  <div className='flex flex-col'>
         
         <label htmlFor="React js">React 70%</label>
         <progress className="progress w-5/6" value="70" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="html">HTML 85%</label>
         <progress className="progress w-5/6" value="85" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="css">CSS 80%</label>
         <progress className="progress w-5/6" value="80" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="Javascript">Javascript 72%</label>
         <progress className="progress w-5/6" value="72" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="tailwind">Tailwind 70%</label>
         <progress className="progress w-5/6" value="70" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="bootstrap">Bootstrap 80%</label>
         <progress className="progress w-5/6" value="72" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="mongodb">Mongodb 60%</label>
         <progress className="progress w-5/6" value="60" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="nodejs">Node js 55%</label>
         <progress className="progress w-5/6" value="55" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="expressjs">Express js 55%</label>
         <progress className="progress w-5/6" value="55" max="100"></progress>
         </div>
         <div className='flex flex-col'>
         
         <label htmlFor="github">Github 65%</label>
         <progress className="progress w-5/6" value="55" max="100"></progress>
         </div>
   
    
  </div>
</div>
        </div>
    );
};

export default Skills;