import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { productsData } from './api/api';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';

const Layout =()=> {
  return (
    <div>
      <Header/>
      {/*React Router component that emulates the browser's scroll restoration on location changes after loaders have completed,
      to ensure the scroll position is restored to the right spot.*/}
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} loader={productsData}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Route>
    )
  );

  return (
    <div className='font-bodyFont bg-gray-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;