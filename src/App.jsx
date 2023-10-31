import { RouterProvider,createBrowserRouter } from "react-router-dom";

import { About,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,Register,SingleProduct } from "./pages";
import { ErrorElement } from "./components";

//main components where everything connects

//loaders
import { customUseLoader as landingLoader} from './pages/Landing';

import {loader as productsLoader} from './pages/Products'

//actions



const router = createBrowserRouter([
 {
  path:'/',
  element:<HomeLayout/>,
  errorElement:<Error/>,
  loader:landingLoader,
  children:[{
    index:true,
    element:<Landing/>,
    errorElement:<ErrorElement/>
  },
  {
    path:'products',
    element:<Products/>,
    errorElement:<Error/>,
    loader:productsLoader
  },
  {
    path:'products/:id',
    element:<SingleProduct/>,
    errorElement:<Error/>,
   
  },
  {
    path:'cart',
    element:<Cart/>
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'checkout',
    element:<Checkout/>
  },
  {
    path:'orders',
    element:<Orders/>
  },
]
 },
 {
  path:'/login',
  element:<Login/>,
  errorElement:<Error/>,
 },
 {
  path:'/register',
  element:<Register/>,
  errorElement:<Error/>,
 
 }
])


const App = () => {
  return (<RouterProvider router={router}>

  </RouterProvider>
  )
}

export default App;