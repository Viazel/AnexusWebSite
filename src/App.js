import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Links from "./components/Links/Links";

export default function App(){
    return (
        <section className="app">
            <NavBar />
            <Banner />
            <Links />
        </section>
    )
}