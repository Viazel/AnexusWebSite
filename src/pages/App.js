import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Links from "../components/Links/Links";

export default function App(){
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <div className="break">
                <h1>NEWS</h1>
            </div>
            <Links />
        </div>
    )
}