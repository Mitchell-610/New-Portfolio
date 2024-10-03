import React from 'react';
import git from '../../pics/git.png'; 
import linkdin from '../../pics/Linkdin.jpg';
import stack from '../../pics/stack.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/Mitchell-610">
                <img src={git} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/mitchell-heit-838ab4321/">
                <img src={linkdin} alt="LinkedIn" />
            </a>
            <a href='https://stackoverflow.com/users/27612998/mitchell-610'>
                <img src={stack} alt='StackOverFlow account'/>
            </a>
        </footer>
    );
}
