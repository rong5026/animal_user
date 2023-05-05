import './App.css';
import { Routes, Route } from 'react-router-dom';
import EnterPage from './Start/Component/EnterMain'

function App() {
  return (
   <Routes>
      <Route exact path='/' element={<EnterPage/>}/>
   </Routes>
  );
}

export default App;
