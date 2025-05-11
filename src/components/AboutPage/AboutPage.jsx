import React from 'react';
import characterImg from '../../../public/img/character.png';
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className='container'>
            <div className='about'>
                <div className='about-image'>
                    <img src={characterImg} alt=""/>
                </div>
                <div className='about-description'>
                    <h2>About me</h2>
                    <p>Hello World, I'm Robert — a guy who decided to dedicate his life to programming and the IT industry. I'm currently focused on building user interfaces, in other words, frontend development. In addition, I work with social media and run IT-related YouTube (8.5k subscribers) and Telegram (10k subscribers) channels.</p>
                    <div className='about-links'>
                        <ul>
                            <li><a href="https://github.com/robertsergeev" target='_blank'>GitHub</a></li>
                            <li><a href="https://t.me/berloga_programmistov" target='_blank'>Telegram</a></li>
                            <li><a href="https://www.youtube.com/@robertsergeev" target='_blank'>YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;