import { Route, Router, Routes } from "react-router"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./pages/Home/Home"
import { Cart } from "./pages/Cart/Cart"
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder"
import { Footer } from "./components/Footer/Footer"
import { useState } from "react"
import { LoginPopUP } from "./components/LoginPopup/LoginPopUp"

export const App=()=>{
  const [showLogin,setShowLogin]=useState(false)

  return(
<>

{showLogin?<LoginPopUP setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
    <Navbar setShowLogin={setShowLogin}/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    
  </div>

<Footer/>
</>
  )
}