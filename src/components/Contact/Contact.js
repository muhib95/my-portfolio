import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		
	
		emailjs.sendForm('service_4tfnllp', 'template_i687wxn', form.current, 'LgEEOSpCAzIdLTMER')
		  .then((result) => {
			if(result.text==="OK"){
				alert('Message send');

			}
			
		  }, (error) => {
			  console.log(error.text);
		  });
	  };
    return (
        <div className='mt-4'>
           <section className="py-6 text-black">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill free to send me a message</p>
			<div className="space-y-4">
				<p className="flex items-center">
					
					<span className='text-xl font-bold'>Muhibbul Hasan</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801749958965</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>muhibbulhasan@gmail.com</span>
				</p>
			</div>
		</div>
	
		 <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
      <label className="block">Name</label>
      <input type="text" name="user_name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400 bg-white"/>
      <label className="block">Email</label>
      <input type="email" name="user_email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400 bg-white"  />
      <label className="block">Message</label>
      <textarea name="message" rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400 bg-white"/>
      <input className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-orange-300 text-black focus:ring-orange-300 hover:ring-orange-400" type="submit" value="Send" />
    </form>
	</div>
</section>
        </div>
    );
};

export default Contact;