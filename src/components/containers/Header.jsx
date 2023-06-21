import headerImg from "../../assets/header-02.png"
import NavBar from "../NavBar"

const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <a href="/">
                    <img className="header-img" src={headerImg} alt="banner" />
                </a>
            </div>
            <NavBar />
        </>
    )
}

export default Header