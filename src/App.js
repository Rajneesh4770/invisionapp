import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/Home' element={<Home></Home>}></Route>
  </Routes>

  </>
  );
}

export default App;
