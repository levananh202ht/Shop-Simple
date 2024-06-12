
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { Home } from './page/home/Home'
import { Payment } from './components/Payment'
import { DetailProduct } from './page/detailProduct/DetailProduct'
import { WishListProduct } from './page/wishListProduct/WishListProduct'
import { AllListProduct } from './components/AllListProduct'
import { Contact } from './components/Contact'
import { ProFile } from './components/ProFile'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<NavBar />}>
        <Route path='/' element={<Home />} />
          <Route path='product' element={<AllListProduct />} />
          <Route path='contact' element={<Contact />} />
          <Route path="/payment/checkout" element={<Payment />} />
          <Route path="product/:id" element={<DetailProduct />}></Route>
          <Route path="product/wishlist" element={<WishListProduct />}></Route>
          <Route path="profile" element={<ProFile /> />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
