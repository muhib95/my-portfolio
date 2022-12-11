import React from 'react';
import html from '../../acc/Html.png'
import css from '../../acc/css.png'
import javascript from '../../acc/javascript-logo-transparent-logo-javascript-images-3.png'
import mongo from '../../acc/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png'
import firebase from '../../acc/1-R4c8l-HBHu-H5qyq-Ot-Zb3h-w.png'
import react from '../../acc/React-icon-svg.png'
import figma from '../../acc/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png'
import exp from '../../acc/download-2-removebg-preview.png'
import tail from '../../acc/Tailwind-CSS-Logo-svg.png'

const Skills = () => {
    return (
        <div className='my-4'>
            <div >
            <h1 className='text-center text-3xl font-semibold my-2'>Technologies I Love To Use</h1>
          
          <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
<div className="card-body">
<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-1'>
       <img src={css} alt="" />
       <img src={javascript} alt="" />
       <img src={mongo} alt="" />
       <img src={html} alt="" />
       <img src={firebase} alt="" />
       <img src={react} alt="" />
       <img src={figma} alt="" />
       <img src={exp} alt="" />
       <img src={tail} alt="" />
      
       </div>
       
 
  
</div>
</div>
            </div>
            <h1 className='text-center text-3xl font-semibold my-3'>Professional Skills</h1>
          
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