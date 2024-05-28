import React from 'react';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import { FaArrowRight } from 'react-icons/fa';
import conf from '../../conf/conf';

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "21be0c39-2da8-44b7-9355-fec8dc65f527");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='pt-16 px-[10%]' name='Contact'>
            <h1 className='text-xl font-semibold text-center text-blue-700 font-poppins'>Contact</h1>
            <h2 className='pt-1 pb-8 text-3xl font-bold text-center font-outfit text-blue-950'>Get in Touch</h2>
            <div className='grid md:grid-cols-2'>
                <div className='font-outfit'>
                    <h3 className='flex items-center text-2xl font-bold text-blue-950'>Send us a message <img src={msg_icon} className='w-7' alt="" /></h3>
                    <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul className='pt-5 space-y-2'>
                        <li className='flex items-center'><img className='w-7' src={mail_icon} alt="" />Contact@gmail.com</li>
                        <li className='flex items-center'><img className='w-7' src={phone_icon} alt="" />11112222333</li>
                        <li className='flex items-center'><img className='w-7' src={location_icon} alt="" />44 sector-02 India</li>
                    </ul>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <label className='font-bold font-outfit'>Your Name</label>
                        <input type="text" className='block w-full p-3 mt-1 mb-4 border-none rounded outline-none resize-none bg-slate-200' name="name" placeholder='Enter Your Name' required />
                        <label className='font-bold font-outfit' htmlFor="phone">Phone Number</label>
                        <input type="tel" className='block w-full p-3 mt-1 mb-4 border-none rounded outline-none resize-none bg-slate-200' name="phone" placeholder='Enter your phone number' required />
                        <label className='font-bold font-outfit' htmlFor="message">Write Your Message</label>
                        <textarea name="message" className='block w-full p-3 mt-1 mb-4 border-none rounded outline-none resize-none bg-slate-200' rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit' className='flex items-center gap-2 px-5 py-3 m-auto mt-10 mb-5 font-bold text-center text-white uppercase bg-blue-800 border-none cursor-pointer rounded-3xl font-outfit'>Send <FaArrowRight /></button>
                    </form>
                    <span className='block'>{result}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
