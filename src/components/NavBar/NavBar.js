import "./NavBar.css";

import logo from "../../assets/logo.png"

export default function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt=""/>
            <nav>
                <ul>
                    <li><a href="lol">Accueil</a></li>
                    <li><a href="lol">Staffs</a></li>
                    <li><a href="lol">Connexion</a></li>
                </ul>
            </nav>
        </div>
    )
}