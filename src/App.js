import './App.css';
import NavBar from './components/NavBar';
import './styles/ComponentStyles.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Features from './pages/Features.jsx'
import Started from './pages/Started'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Index from './pages/dashboard/Index';
import Books from './pages/dashboard/myBooks/Books';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/about" element ={<AboutPage/> }/>
        <Route path="/features" element ={<Features/>}/>
        <Route path="/started" element ={<Started/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/dashboard" element ={<Index/>}/>
        <Route path="/mybooks" element ={<Books/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://github.com/joehanzsenna/Team-B-project.git 