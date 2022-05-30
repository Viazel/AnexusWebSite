import "./Banner.css";
import logo from "../../assets/logo.png";

export default function Banner(){
    return (
        <div className="banner">
            <div className="info">
                <h1><span className="anexus">ANEXUSRP</span><br/>MINECRAFT</h1>
                <p>AnexusRP et un serveur RôlePlay en 1.12.2 qui a pour objectif de révolutionner le monde du RôlePlay Minecraft</p>
                <div className="buttonsbanner">
                    <button className="button">CONNEXION</button>
                    <button className="button">INSCRIPTION</button>
                </div>
            </div>
            <img src={logo} alt=""/>
        </div>
    )
}