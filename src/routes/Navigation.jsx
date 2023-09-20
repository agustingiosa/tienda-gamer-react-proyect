import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, CheckoutPage } from "../pages";

const routes = createBrowserRouter ([
    {
            path: '/Home',
            element: <HomePage/>
    },
    {
        path: '/Checkout',
        element: <CheckoutPage/>
    },
    {
        path: '../pages/ItemDetail',
        element: <ItemDetailPage/>
    },
])

const Navigation = () => {
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation