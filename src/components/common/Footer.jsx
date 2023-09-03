import { Link } from "react-router-dom"
import Mailing from '../Mailing'

const Footer = () => {
  return (
    <div className="footer-all">
    
    <Mailing />

      <div className='container-fluid footer-container'>
        <Link className='footer-social'>
          <i class='fab fa-instagram'></i>
        </Link>
        <Link className='footer-social'>
          <i className='fab fa-whatsapp'></i>
        </Link>
        <Link className='footer-social'>
          <i className='fab fa-facebook'></i>
        </Link>
      </div>

    </div>
  )
}

export default Footer