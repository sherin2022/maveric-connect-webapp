import LoginPage from "./pages/LoginPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostslistPage from "./pages/PostslistPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
   
    <Router>
       <Header />
      <Routes>     
        <Route exact path="/" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignUpPage/> } />
        <Route path="/post" element={ <PostslistPage/> } />
        <Route path="/post/postid" element={ <PostDetailsPage/> } />   
      </Routes>
      <Footer />
    </Router>
 
  );
}

export default App;