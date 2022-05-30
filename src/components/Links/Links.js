import "./Links.css";

export default function Links(){
    return (
        <footer>
            <div className="break">
                <h1>NEWS</h1>
            </div>
            <div className="end">
                <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt=""/>
                <div className="general">
                    <div className="links">
                        <h2>Liens</h2>
                        <div>
                            <a href="https://github.com/Viazel" target="blank">Github</a>
                            <p>Discord: <span style={{color: "#fff"}}>Viazel#7881</span></p>
                            <a href="https://www.instagram.com/viazelyt/" target="blank">Instagram</a> <br/>
                            <a href="https://twitter.com/ViazelYT" target="blank">Twitter</a>
                        </div>
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