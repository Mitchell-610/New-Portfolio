import { Link } from "react-router-dom";

export default function PortHeader() {
    return (

<header>
<div className="name">
    <h1>Mitchell Heit</h1>
</div>

<nav>
    <ul>
        <li>
            <Link to="/">About Me</Link>
        </li>
        <li>
            <Link to="/mywork">My Work</Link>
        </li>
        <li>
            <Link to="/contact">Contact Me</Link>
        </li>
        <li>
            <a href="/DennisHeitSoftwearResume.pdf" download>Download Resume</a>
        </li>
    </ul>
</nav>
</header>
    );
}