import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Component/Login.jsx'
import MainPage from "./Main/Main.jsx"
import MatchResult from './ Matching/MatchResult';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LoginPage/>}/>
                <Route path="/main" element={<MainPage/>} />
                <Route path="/result" element={<MatchResult/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;

// import { Routes, Route } from 'react-router-dom'; import { useEffect } from
// 'react'; import EnterPage from './Login/Component/Login.jsx' function App() {
// return (    <Routes>       <Route exact path='/' element={<EnterPage/>}/>
// </Routes>   ); } export default App;