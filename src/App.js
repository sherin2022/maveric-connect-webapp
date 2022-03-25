import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
    <Header />
    {/*<LoginPage />*/}
     <SignupPage /> 
     <Footer />
    </div>    
  );
}

export default App;
