import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const handleClickSendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r1u1jpm', 'template_t31leab', form.current, 'user_ZsWBUNoFRUr0MhwI1FCDG').then((rs) => {
            window.alert('Send email success!' + `${rs.text}`);
            e.target.reset();
        }, (err) => {
            window.alert('Send email error!' + `${err.text}`);
        })

    }
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nguyenhai15040206@gmail.com</h5>
                        <a href="mailto:nguyenhai15040206@gmail.com" >Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Hải Nguyễn</h5>
                        <a href="https://m.me/tanhai.nguyen.921/" target='_blank' >Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Zalo.me</h4>
                        <h5>0357866848</h5>
                        <a href="https://chat.zalo.me/" target='_blank'>Send a message</a>
                    </article>

                </div>
                <form ref={form} onSubmit={handleClickSendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <input type="text" name='subject' placeholder='Your Subject' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact