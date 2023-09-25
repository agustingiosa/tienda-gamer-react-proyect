import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage, CheckoutPage, ProductosPage } from "../pages";
import ItemDetailContainer from '../components/itemDetailContainer/itemDetailContainer';

const routes = createBrowserRouter ([
    {
            path: '/',
            element: <HomePage/>
    },
    {
        path: '/Checkout',
        element: <CheckoutPage/>
    },
    {
        path:'/product/:idProduct',
        element: <ItemDetailContainer/>
    },
    {
        path: '/Productos',
        element: <ProductosPage/>
    },
])

const Navigation = () => {
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation