import Gron from "../assets/groenport.png";

export default function Nav() {
    const openHamburger = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-menu li");
        const bar = document.querySelectorAll(".bar");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navLink.forEach((link) => {
            link.classList.toggle("active");
        
        });
        bar.forEach((bar) => {
            bar.classList.toggle("active");
        });
    }

    return (

        <nav>
            <img className="imgemil" src={Gron} alt="nav-pic" />


            <div className="nav-bar" >
                <ul className="nav-menu">

                    <li><a href="#intro-link">HJEM</a></li>
                    <li><a href="#aboutme-link">OM MIG</a></li>
                    <li><a href="#port-link">PORTFOLIO</a></li>
                    <li><a href="#skills-link">KOMPETENCER</a></li>
                    <li><a href="#contact-link">KONTAKT</a></li>
                </ul>
                <div className="hamburger" onClick={openHamburger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

        </nav>
    );
}
