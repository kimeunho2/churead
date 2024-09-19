import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import HomeLogin from './pages/HomeLogin'




function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Homelogin" element={<HomeLogin/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}
export default App;
