import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.facebook.com/tanhai.nguyen.921/" target="_blank"><BsFacebook /></a>
            <a href="https://github.com/nguyenhai15040206" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials