import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import HomeLogin from './pages/HomeLogin'
import Post from './pages/Post'





function App() {
 
const handlePost = (value) => {
  console.log("123",value);
}


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Homelogin" element={<HomeLogin/>}/>
        <Route path="/Post" element={<Post onPost={handlePost}/>}/>
      </Routes>
    </BrowserRouter>

    </div>

  );
}
export default App;
