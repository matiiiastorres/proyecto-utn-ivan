import HomeBody from "../Componentes/HomeBody";
import NavBar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";
import QuienesSomos from "../Componentes/quienesSomos/QuienesSomos";
import Contacto from "../Componentes/contacto/Contacto";
import Verduras from "../Componentes/verduras/Verduras";
import Semilleria from "../Componentes/semilleria/Semilleria";
import Carniceria from "../Componentes/carniceria/Carniceria";
import Panaderia from "../Componentes/panaderia/Panaderia";
import Productos from "../Componentes/productos/Productos";


const HomePage = () => {
    return (
        <>
        <NavBar />
        <Footer />
        <HomeBody />
        <QuienesSomos/>
        <Contacto/>
        <Verduras/>
        <Productos/>
        <Carniceria/>
        <Panaderia/>
        <Semilleria/>
        </>
    );
}

export default HomePage;