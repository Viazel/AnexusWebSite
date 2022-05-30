import "./NavBar.css";

export default function NavBar() {
    return (
        <div className="navbar">
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt=""/>
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