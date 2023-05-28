import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import EnterPage from './Enter/Enter.jsx'
import MainPage from "./Main/Main.jsx"
import MatchResult from './ Matching/MatchResult';
import MyAnimal from './MyAnimal/MyAnimal';
import Booth from './Booth/Booth';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<EnterPage/>}/>
                <Route path="/main" element={<MainPage/>} />
                <Route path="/result" element={<MatchResult/>} />
                <Route path='/myanimal' element={<MyAnimal/>}/>
                <Route path='/booth' element={<Booth/>}/>
                <Route path='/content'></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

// import { Routes, Route } from 'react-router-dom'; import { useEffect } from
// 'react'; import EnterPage from './Login/Component/Login.jsx' function App() {
// return (    <Routes>       <Route exact path='/' element={<EnterPage/>}/>
// </Routes>   ); } export default App;