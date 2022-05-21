import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </main>
  );
}

export default App;
