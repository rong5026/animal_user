import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import EnterPage from './Enter/EnterPage';

function App() {
  return (
   <Routes>
      <Route exact path='/' element={<EnterPage/>}/>
   </Routes>
  );
}

export default App;
