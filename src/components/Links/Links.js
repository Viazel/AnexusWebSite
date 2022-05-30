import "./Links.css";
import logo from "../../assets/logo.png";

export default function Links(){
    return (
        <footer>
            <div className="break">
                <h1>NEWS</h1>
            </div>
            <div className="end">
                <img src={logo} alt=""/>
                <div className="general">
                    <div className="links">
                        <h2>Liens</h2>
                    </div>
                    <div className="social-medias">
                        <h1>Réseaux sociaux</h1>
                        <p>Voici nos réseaux sociaux où vous pouvez nous suivre afin de connaitre l'actualité du serveur.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}