import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, CheckoutPage } from "../pages";

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
])

const Navigation = () => {
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation