import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, CheckoutPage, ProductosPage } from "../pages";
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
        path:'/Productos/:id',
        element: <ItemDetailPage/>
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