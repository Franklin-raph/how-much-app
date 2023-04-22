import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Scanpage from './pages/Scanpage'
import Bottomnav from './components/Bottomnav'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scanproduct' element={<Scanpage />} />
        </Routes>
        <Bottomnav />
      </BrowserRouter>
    </div>
  )
}

export default App
