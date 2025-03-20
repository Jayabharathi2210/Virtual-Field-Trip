import Signup from './login/Signup.js';
import Login from './login/Login.js';
import "./index.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="container mt-5">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
