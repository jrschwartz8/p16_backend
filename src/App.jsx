import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Sneakers from './components/Sneakers'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import Contact from './components/Contact'


function App() {
  return <HashRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Sneakers/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element = {<Contact/>}></Route>
    </Routes>
  </HashRouter>
}
  

export default App
