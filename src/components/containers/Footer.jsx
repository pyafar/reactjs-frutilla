import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer-container'>
        <Link className='footer-social'>
          <i class='fab fa-instagram'></i>
        </Link>
        <Link className='footer-social'>
          <i class='fab fa-whatsapp'></i>
        </Link>
        <Link className='footer-social'>
          <i class='fab fa-facebook'></i>
        </Link>
      </div>

    </>
  )
}

export default Footer