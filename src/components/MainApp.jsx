import Header from "./containers/Header"
import Footer from "./containers/Footer"
import AppRouter from '../routes/AppRouter'

const MainApp = () => {
  return (
    <>
    <Header />
    <AppRouter/>
    <Footer />

    </>
  )
}

export default MainApp