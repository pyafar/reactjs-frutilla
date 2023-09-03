import Header from "./common/Header"
import Footer from "./common/Footer"
import AppRouter from '../routes/AppRouter'
import OrderContextProvider from "./context/OrderContext"

const MainApp = () => {
  return (
    <OrderContextProvider>
      <Header />
      <AppRouter />
      <Footer />
    </OrderContextProvider>
  )
}

export default MainApp