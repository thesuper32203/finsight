
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./components/LoginSignup/LoginSignup.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginSignup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
