import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, CheckoutPage, ProductosPage } from "../pages";

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
        path: '/ItemDetail',
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