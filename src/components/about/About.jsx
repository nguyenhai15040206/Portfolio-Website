import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
    return (
        <section id='about'>
            <h5>Ge To Know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Expericence</h5>
                            <small>3+ Month Interm</small>
                        </article>

                        <article className="about__card">
                            <FiUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worlwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde possimus magnam amet culpa, et ducimus, deleniti consequatur consectetur cumque nam quis ratione quod velit! Ut error beatae est distinctio.</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>


            </div>
        </section>
    )
}

export default About