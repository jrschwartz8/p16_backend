import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NavigationBar from './components/NavigationBar'

function App() {
  return <HashRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  </HashRouter>
}
  

export default App
