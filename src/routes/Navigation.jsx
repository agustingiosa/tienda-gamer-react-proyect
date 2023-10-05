import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { CartPage, ItemDetailContainer, ItemListContainer, ProductosPage } from '../pages'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer/>
    },
    {
        path:'/item/:idProduct',
        element: <ItemDetailContainer /> 
    },
    {
        path:'/category/:id',
        element: <ItemListContainer />
    },
    {
        path:'/cart',
        element: <CartPage />
    },
    {
        path:'/productos',
        element: <ProductosPage />
    },
    
])

const Navigation = () => {
    return ( 
        <RouterProvider router={routes}/>
    )
}

export default Navigation