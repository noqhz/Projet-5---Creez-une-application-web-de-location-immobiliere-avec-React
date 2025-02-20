import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Logements from './pages/Logement/'
import Apropos from './pages/Apropos/'
import Error from './pages/Error/'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logements />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
