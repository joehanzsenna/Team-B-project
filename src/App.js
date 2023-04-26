import './App.css';
import NavBar from './components/NavBar';
import './styles/Navbar.css'
// import './styles/'
import './styles/MyBooks/MyBooks.css'
import './styles/HomePage.css'
import './styles/Error.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Started from './pages/Started'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Dashboard from './pages/Dashboard';
import MyBooksPage from './pages/Mybookspages/MyBooksPage';
import PurchasedBooksPage from './pages/Mybookspages/PurchasedBooksPage';
import BookmarkedBooksPage from './pages/Mybookspages/BookmarkedBooksPage';
import Error from './components/ErrorPage/Error';


function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://bookapi-3arg.onrender.com/all")
  //     .then((response) => response.json())
  //     .then(data => setData(data)).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get("https://bookapi-3arg.onrender.com/all")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/about" element ={<AboutPage/> }/>
        {/* <Route path="/features" element ={<Features/>}/> */}
        <Route path="/started" element ={<Started/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/dashboard" element ={<Dashboard/>}/>
        <Route path="/mybookspage" element ={<MyBooksPage/>}/>
        <Route path="/purchasedbookspage" element ={<PurchasedBooksPage/>}/>
        <Route path="/bookmarkedbooksPage" element ={<BookmarkedBooksPage/>}/>
        <Route path="*" element ={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
