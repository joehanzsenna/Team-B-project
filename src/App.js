import './App.css';
import NavBar from './components/NavBar';
import './styles/ComponentStyles.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Features from './pages/Features.jsx'
import Started from './pages/Started'


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path="about" element ={<AboutPage/> }/>
        <Route path="features" element ={<Features/>}/>
        <Route path="started" element ={<Started/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://github.com/joehanzsenna/Team-B-project.git 