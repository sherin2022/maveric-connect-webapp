import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import PostDetailsPage from './pages/PostDetailsPage';
import PostListContainer from './pages/PostListContainer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUpPage from "./pages/SignUpPage"
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/signup" element={<SignUpPage/>}/>  
        <Route path = "/post" element = {<PostListContainer/>}/>
        <Route path = "/post-details/:id" element = {<PostDetailsPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
   
  );
}

export default App;
