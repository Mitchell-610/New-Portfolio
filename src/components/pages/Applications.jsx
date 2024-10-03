import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../../utils/projectData';
import './Applications.css';

export default function Applications() {
    const [project, setProject] = useState({});
    const path = useLocation()
    useEffect(() => {
        const id = path.pathname.split("/").at(-1);
        setProject(projects.find(Obj => Obj.id==id))
    }, [path])
    return (
        <div className='ApplicationsPage'>
            <h1>{project.title}</h1>
            <p>If you click on the photo it will take you to the site.</p>
            <div className="Applications">
                <a href={project.siteUrl}>
                    <img src={project.img} alt="A photo of my amazing blog site" />
                </a>
                <p>{project.rdme}</p>
            </div>
            <div className='repo'>
                <h2>GitHub Repository</h2>
                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                    View GitHub Repo
                </a>
            </div>
        </div>
    );
}
