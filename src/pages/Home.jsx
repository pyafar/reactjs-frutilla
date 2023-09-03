import { NavLink } from 'react-router-dom'
import Banner from '../assets/img/banner-01.png'
import HomeDisplay from '../components/containers/HomeDisplay'

const Home = () => {
  return (


    <>

      <hr className='dividers' />
      <div className='container-fluid'>
        <NavLink to="/contact">
          <img className="header-img" src={Banner} alt="banner" />
        </NavLink>
      </div>

      <HomeDisplay />
      <div className="home-info">
        <section className='info-section'>

          <article className='info-article'>
            <i className='fas fa-wallet'></i>
            <h4>PAGÁ FÁCILMENTE</h4>
            <p>Elegí la mejor opción de pago</p>
          </article>

          <article className='info-article'>
            <i className='fas fa-shipping-fast'></i>
            <h4>ENTREGAS Y RETIROS</h4>
            <p>Realizamos envíos a domicilio, o podés retirar tu pedido personalmente</p>
          </article>

          <article className='info-article'>
            <i className='fas fa-percentage'></i>
            <h4>PROMOCIONES</h4>
            <p>Precios accesibles y descuentos por cantidad</p>
          </article>

        </section>
      </div>

    </>

  )
}



export default Home