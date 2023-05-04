import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import EnterPage from './Enter/EnterPage';
import StartMain from './Start/EnterMain.jsx';

function App() {
  return (
   <Routes>
      <Route exact path='/' element={<StartMain/>}/>
   </Routes>
  );
}

export default App;
