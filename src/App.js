import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProduct/AllProducts';
import { ToastContainer } from 'react-toastify';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import RequireAuth from './components/Authentication/RequireAuth';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';

function App() {
  return (
    <main >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path="/products/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>

        </Route>


        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </main>
  );
}

export default App;
