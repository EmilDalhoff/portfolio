import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        
        <nav>
            <img className="imgemil" src="src/assets/groenport.png" alt="nav-pic" />

            
             <div className="nav-bar" >
            <a href="#intro-link">HJEM</a>
            <a href="#aboutme-link">OM MIG</a>
            <a href="#port-link">PORTFOLIO</a> 
            <a href="#skills-link">KOMPETENCER</a>
            <a href="#contact-link">KONTAKT</a>
            </div>

        </nav>
    );
}
