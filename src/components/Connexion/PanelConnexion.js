import "./PanelConnexion.css";

export default function PanelConnexion(){
    return (
        <div className="panel-connexion">
            <div className="connexion-box">
                <h1>Connexion</h1>
                <form>
                    <div className="form-mail">
                        <h2>Adresse Email</h2>
                        <input type="email"/>
                    </div>
                    <div className="form-password">
                        <h2>Mot de passe</h2>
                        <input type="text"/>
                    </div>
                    <div className="options">
                        <div className="remembering">
                            <div className="check-remember">
                                <input type="checkbox" name="remember"/>
                                <label htmlFor="remember">Se souvenir de moi</label>
                            </div>
                            <a href="lol">Mot de passe oublié ?</a>
                        </div>
                        <input type="submit" value="CONNEXION"/>
                    </div>
                </form>
            </div>
        </div>
    )
}