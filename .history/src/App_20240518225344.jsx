
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { Home } from './page/home/Home'
import { Payment } from './components/Payment'
import { DetailProduct } from './page/detailProduct/DetailProduct'
import { WishListProduct } from './page/wishListProduct/WishListProduct'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<NavBar />}>
        <Route path='/' element={<Home />} />
          <Route path='product' element={<h1>Sản phẩm</h1>} />
          <Route path='contact' element={<h1>Lien hệ</h1>} />
          <Route path="/payment/checkout" element={<Payment />} />
          <Route path="product/:id" element={<DetailProduct />}></Route>
          <Route path="product/wishlist/:id" element={<WishListProduct />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
