import React, { useState, useEffect } from 'react';
import Me from '../../pics/npic.jpg';
import Footer from '../cards/Footer';
import './AboutMe.css'

export default function AboutMe() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL']; // Add your skills here
    const [currentSkill, setCurrentSkill] = useState(skills[0]);
    const [skillIndex, setSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
            setCurrentSkill(skills[(skillIndex + 1) % skills.length]);
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [skillIndex, skills]);

    return (
        <div>
        <section id="About-Me" className="About-Me container" >
            <h1 className="ab text-center pb-3">About Me</h1>

            <div className='wrapper'>
                <img className="me" src={Me} alt="A photo of me." />

            <div className='space'>
                <h2>Some of my skills include:</h2>
                <h3 className='skills'>{currentSkill}</h3>
            </div>
            </div>

                <p className='meinfo'>
                    My name is Mitchell Heit. I'm an aspiring software developer. I am currently enrolled in the UCF
                    coding bootcamp and will graduate and receive my certificate October 28th 2024. My old passion was working on high-end
                    cars. Even though I loved it, I knew I had so much more potential. I've always loved the
                    technical side of things. As a child, I used to take things apart just to see how they worked. Then
                    I stumbled across coding and at that second I knew I found my purpose. What I was supposed to
                    be doing, something that made me genuinely happy. Being able to go into a website, break it down and rebuild it
                    is something I've always loved, so why not see it from the technical side of things.
                    That's when I knew coding would consume my life but if it's something you enjoy does it really matter?
                    Some things I enjoy are hanging out with my two wonderful dogs and using hobby-grade RC cars outside of coding, of course.
                </p>
        </section>
        <Footer />
        </div>
    );
}
