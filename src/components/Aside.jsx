import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
import Circle from "../assets/Ellipse-18.svg"
import Line from "../assets/Line.svg"
import Linkedin from "../assets/Linkedin.svg"
import Youtube from "../assets/Youtube.svg"
import Punkt from "../assets/Icons.svg"
import Frame from "../assets/Frame.svg"
export default function Aside() {

    return (
    <aside className="aside-content">
        <div>
        
         <div className="icon-container">
    <a href="https://facebook.com/emildalhoff"><i className="icon"><img src={Facebook} alt="Icon 1" /></i></a>
    <a href="https://www.instagram.com/emildalhoffp"><i className="icon"><img src={Instagram} alt="Icon 2" /></i></a>
    <a href=""><i className="icon"><img src={Circle} alt="Icon 3" /></i></a>
    <a href="https://www.linkedin.com/in/emil-dalhoff-30a5681b7/"><i className="icon"><img src={Linkedin} alt="Icon 4" /></i></a>
    <a href="https://www.youtube.com/channel/UCInVTXQsyLdiSTDI5Q-g22A"><i className="icon"><img src={Youtube} alt="Icon 5" /></i></a>
  </div>
  <div>
    <img className="line1" src={Line} alt="line" />
  </div>
        </div>
        <div className="Sprog">
            <h3 className="asideh3">Sprog</h3>
            <p>Dansk</p>
            <hr className="hr1" />
            <p>Engelsk</p>
            <hr className="hr2" />
            <p>Tysk</p>
            <hr className="hr3" />
        </div>

        <div>
    <img className="line2" src={Line} alt="line" />
  </div>

  <div className="Sprog">
            <h3 className="asideh3">Kompetencer</h3>
            <p>Kreativitet</p>
            <hr className="hr4" />
            <p>Kommunikationsevner</p>
            <hr className="hr5" />
            <p>Opdatering & Læring</p>
            <hr className="hr6" />
            <p>Teamarbejde</p>
            <hr className="hr7" />
            <p>Selvdisciplin</p>
            <hr className="hr8" />
        </div>
        <div>
    <img className="line3" src={Line} alt="line" />
  </div>

  <div className="Sprog">
  <h3 className="asideh3">Bonus</h3>
  <div className="row">
  <img  src={Punkt} alt="punktform" />
  <p>Grafisk Hobby</p>
  </div>
  <div className="row">
  <img src={Punkt} alt="punktform" />
  <p>Nysgerrig</p> 
  </div>
  <div className="row">
  <img src={Punkt} alt="punktform" />
  <p>Erfaring med AI</p> 
  </div>
  <div className="row">
  <img src={Punkt} alt="punktform" />
  <p>Github Ekpertise</p> 
  </div>
  </div>

  <div>
    <img className="line4" src={Line} alt="line" />
  </div>

  <button className="buttonCV">DOWNLOAD CV <img className="dl-i"src={Frame} alt="download-icon" /></button>
      </aside>
    );
}

