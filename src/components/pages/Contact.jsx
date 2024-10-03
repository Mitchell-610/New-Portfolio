import linkdin from '../../pics/linkdIn.jpg'; // Make sure the path is correct
import git from '../../pics/git.png';
import ContactMe from './ContactMe';
import stack from '../../pics/stack.png';
import './Contact.css';

export default function Contact() {
    return (
        <div id="Contact-Me" className="Contact-Me container">
            <h1>Contact Me</h1>

            <div className="ref">
                <div className="contact-item">
                    <a href="https://github.com/Mitchell-610">
                    <img src={git}></img>
                    </a>
                    <p>Github</p>
                </div>

                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/mitchell-heit-838ab4321/">
                        <img src={linkdin} alt="LinkedIn" />
                    </a>
                    <p>LinkedIn</p>
                </div>

                <div className="contact-item">
                    <a href="https://stackoverflow.com/users/27612998/mitchell-610">
                        <img src={stack} alt="Stack OverFlow" />
                    </a>
                    <p>Stack Overflow</p>
                </div>

            </div>
            <div className="contact-form">
                <ContactMe />
            </div>
        </div>
    );
}
