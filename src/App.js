import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProduct/AllProducts';

function App() {
  return (
    <main >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </main>
  );
}

export default App;
