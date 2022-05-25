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
import AllUsers from './components/Dashboard/AllUsers';
import AddProduct from './components/Dashboard/AddProduct';
import ManageAllProducts from './components/Dashboard/ManageAllProducts';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import RequireAdmin from './components/Authentication/RequireAdmin';
import Payment from './components/Dashboard/Payment';
import NotFound from './components/Shared/Notfound';
import Blog from './components/Blog/Blog';
import MyProtfolio from './components/Blog/MyProtfolio';

function App() {
  return (
    <main >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path="/products/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>


        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>

          <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='manageallproducts' element={<RequireAdmin><ManageAllProducts></ManageAllProducts></RequireAdmin>}></Route>

        </Route>


        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </main>
  );
}

export default App;
