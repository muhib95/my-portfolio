import React from 'react';
import './Home.css'
import { SlSocialLinkedin} from 'react-icons/sl';
import { AiFillGithub} from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';
import pp from '../../acc/my port.jpg'

const Home = () => {
    return (
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className='border-2 border-sky-500 flex flex-col justify-center align-middle text-center p-4'>
           <h1>Hi There I am</h1>
           <h1 className='text-4xl'><span className='text-sky-500'>MUHIBBUL</span> HASAN</h1>
           <p>I'm a <span className='text-sky-500'>web developer</span> with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
<div className='flex  justify-center align-middle  text-center mt-2 text-3xl text-green-800'>
 
   <a href='https://www.facebook.com/muhibbul.hasan2/' ><BsFacebook className='mr-2'></BsFacebook></a>
   <a href='https://www.linkedin.com/in/muhibbul-hasan/'><SlSocialLinkedin className='mr-2'></SlSocialLinkedin></a>
   <a href='https://github.com/muhib95'><AiFillGithub></AiFillGithub></a>
   
    


</div>
           </div>
           
           <div className="avatar  p-8 ">
  <div className="w-3/4 mask  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
  <img src={pp} alt="" />
  </div>
</div>
            
           

        </div>
    );
};

export default Home;