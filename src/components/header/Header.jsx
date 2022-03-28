import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import './header.css';
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h2>Nguyễn Tấn Hải</h2>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header