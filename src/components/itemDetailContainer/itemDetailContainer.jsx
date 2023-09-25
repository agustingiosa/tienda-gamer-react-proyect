import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ itemId }) => {
    const [productSelect, setProductSelect] = useState({});
    const {id} = useParams ()

    const idProductParam = id.toString()
    console.log(idProductParam)

    useEffect(() => {
        const result = productsForFilter.find((prod) => prod.id === idProductParam)

        setProductSelect(result)
    }, [idProductParam, productsForFilter])

    return (
        <ItemDetailContainer productSelected = {productSelect}/>
    )
}
    
export default ItemDetailContainer