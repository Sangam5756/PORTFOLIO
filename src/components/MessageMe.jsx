import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { IoSend } from "react-icons/io5";


const MessageMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7ssdikq', 'template_wjfexqr', form.current, {
                publicKey: 'biI1CSSXfzkERtdwW',
            })
            .then(
                () => {

                    toast.success("Successfully Sent");
                    form.current.reset();
                },
                (error) => {
                    toast.error('FAILED...', error.text);

                },
            );
    };



    return (

        <form ref={form} className='text-white h-40 sm:w-80  sm:ml-80 ml-24 mb-24' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required className='  focus:bg-white curs focus:text-black text-white bg-primary rounded outline-none p-2' />
            <label>Email</label>
            <input type="email" name="from_email" required className=' focus:bg-white curs focus:text-black text-white bg-primary rounded outline-none p-2' />
            <label>Message</label>
            <textarea name="message" className=' focus:bg-white curs  focus:text-black text-white bg-primary rounded outline-none p-2' maxLength={1000} required />
            <div className='flex items-center'>
              
              
            <button type="submit" required className='bg-tertiery text-black hover:text-white hover:bg-red-800 duration-300 px-2 py-1 w-full cursor-pointer text-center ' >Send</button>
            </div>

        </form>

    );
};

export default MessageMe;