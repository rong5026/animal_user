import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Component/Login.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact="exact" path='/' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

// import { Routes, Route } from 'react-router-dom'; import { useEffect } from
// 'react'; import EnterPage from './Login/Component/Login.jsx' function App() {
// return (    <Routes>       <Route exact path='/' element={<EnterPage/>}/>
// </Routes>   ); } export default App;