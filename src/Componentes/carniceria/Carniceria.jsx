import React from 'react'
import NavBar from "../Navbar";
import Footer from "../Footer";
import Perfil2  from "../../img/trabajo.png";


const Carniceria = () => {
  return (
    <>
      <NavBar />
    <div>Carniceria</div>
    <>
    <div className='col-10 col-md-5 mx-1 '>
        <div className="   ">
    <img
      className="w-100"
      src={Perfil2}
      alt=""
      data-bs-target="#carouselExampleA"
      data-bs-slide-to="0"
    />
    <h5>nombre</h5>
    <h5>precio</h5>
  </div>
  </div>
   </>
        <Footer />
    
    </>
  )
}

export default Carniceria