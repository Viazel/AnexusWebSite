import NavBar from "../components/NavBar/NavBar";
import Links from "../components/Links/Links";
import PanelConnexion from "../components/Connexion/PanelConnexion";

export default function Connexion() {
    return (
        <div className="connexion">
            <NavBar />
            <PanelConnexion />
            <Links />
        </div>
    )
}