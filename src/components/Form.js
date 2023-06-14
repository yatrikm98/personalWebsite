import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        // console.log('HI')
            e.preventDefault();
            emailjs.sendForm('service_fo6wo6c', 'template_6ggzlsr', form.current, 'iJnnUny8Mx-XFQVSz')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset()
    };

    return (
        <div id="contact" className="flex justify-center mt-5">
            <section className="about">
                <div className="text-2xl p-2 text-blue-600">⭐ Contact Me</div>
                <div className="h-0.5 bg-blue-400 mb-3"></div>
                <div className='bg-black rounded'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                        <div className='text-white mt-2 mb-4 ml-3'>
                            Email yatrikmehta82 at gmail.com
                        </div>
                        <input className='ml-3 mr-3 rounded-md mb-5 p-2'
                            type="text" name="user_name"
                            required placeholder='Full Name' />
                        <input className='ml-3 mr-3 rounded-md mb-5 p-2'
                            type="email" name="user_email"
                            required placeholder='xyx@gmail.com ' />
                        <textarea className='ml-3 mr-3 rounded-md mb-5 p-3'
                            name="message" required placeholder = 'Enter Mesaage Here' />
                        <div className=''>
                            <button type='submit'
                                className='border p-3 rounded-lg hover:bg-blue-300 flex items-center justify-center text-white flex mb-5 ml-3 mr-3 h-10'>
                                Send
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form;