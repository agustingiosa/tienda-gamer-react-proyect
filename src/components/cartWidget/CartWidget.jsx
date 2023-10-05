import {BsCart} from 'react-icons/bs'
import { Badge } from '@mui/material'
import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const {cart} = useContext(CartCtx)
    return (
        <Badge className='color' badgeContent={cart.length} >
            <BsCart size={25} />
        </Badge>
    )
}

export default CartWidget