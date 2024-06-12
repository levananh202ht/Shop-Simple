
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<NavBar />} />
        <Route path='product' element={<h1>Sản phẩm</h1>} />
        <Route path='contact' element={<h1>Lien hệ</h1>} />
      </Routes>
    </>
  )
}

export default App
