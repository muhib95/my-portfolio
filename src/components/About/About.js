import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 justify-items-center'>
           <div className="card w-[100%] bg-base-100 shadow-xl p-3">
  <div className="card-body">
    <h2 className="card-title">Basic Information</h2>
    <h2>Muhibbul Hasan</h2>
    <h2>Address: <span>50/2 cadet college by lane Mymensingh</span></h2>
    <h2>Language: <span>Bangla, English</span></h2>
    
  </div>
</div>
<div className="card w-[100%]  bg-base-100 shadow-xl p-3">
  <div className="card-body">
    <h2 className="card-title">Education Information</h2>
    <h2>BSc. in Computer Science and Engineering</h2>
    <h2>University of Liberal Arts Bangladesh</h2>
    
  </div>
</div>
        </div>
    );
};

export default About;