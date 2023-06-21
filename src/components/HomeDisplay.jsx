import { NavLink } from 'react-router-dom';

const HomeDisplay = () => {
  return (
<div className='container-fluid container-home-display'>

<h2>CATEGORÍAS</h2>
<hr className='dividers' />

<section className="home-display">

  <article className='card'>
    <NavLink className="card-link" to="/category/tortas">
      <img className="card-img-top" src="img/browniefrutilla.jpg" alt="tortas" />
      <hr className='card-divider' />
      <h3>Tortas</h3>
    </NavLink>
  </article>

  <article className='card'>
    <NavLink className="card-link" to="/category/cupcake">
      <img className="card-img-top" src="img/cupcakechoco.jpg" alt="cupcake" />
      <hr className='card-divider' />
      <h3>Cupcake</h3>
    </NavLink>
  </article>

  <article className='card'>
    <NavLink className="card-link" to="/category/cuadrados">
      <img className="card-img-top" src="img/cuadradobrownie01.jpg" alt="cuadrado" />
      <hr className='card-divider' />
      <h3>Cuadrados</h3>
    </NavLink>
  </article>

  <article className='card'>
    <NavLink className="card-link" to="/category/alfajores">
      <img className="card-img-top" src="img/alfabrownie01.jpg" alt="alfajores" />
      <hr className='card-divider' />
      <h3>Alfajores</h3>
    </NavLink>
  </article>

</section>
</div>
  )
}

export default HomeDisplay