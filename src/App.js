import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/NavBar';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
