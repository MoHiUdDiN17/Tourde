import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Errorhandle from './Components/Errorhandle/Errorhandle';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Registration from './Components/Login/Registration';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Myreview from './Components/Myreview/Myreview';
import Update from './Components/Myreview/Update';
import Blog from './Components/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '*',
          element: <Errorhandle></Errorhandle>
        },
        {
          path: '/',
          loader: () => fetch('https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/services-best3'),
          element: <Home></Home>
        },
        {
          path: '/services',
          loader: () => fetch('https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/services'),
          element: <Services></Services>
        },
        {
          path: '/service/:id',
          loader: async ({ params }) => {
            return fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/service/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/myreview',
          element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
        },
        {
          path: '/update/:id',
          loader: async ({ params }) => {
            return fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/update/${params.id}`, {
              headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
              }
            })
          },
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }

      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
