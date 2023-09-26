import ListItem from "../listItem/ListItem";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <>
            <div className="productos container">
                <ListItem 
                    id= '1'
                    name="Ryzen 5 5500g" 
                    price="170.000" 
                    url = 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_t-49FtrIWRFIhQ0-3m6QN26UYHizNcOortnr6OMgmC6Jfpke4W9mZIowFke0rbLk_N72GdLQbeHMGE8OSeKPPSCc1giqBEp7bJCHuM4dlFrD3RKsErlX1rQfCpF1&usqp=CAc' 
                    addToCart={props.addToCart}
                ></ListItem>
                <ListItem
                    id= '2'
                    name="Mother MSI A520M-A PRO DDR4 AM4 " 
                    price="77.000" 
                    url = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21848_Mother_MSI_A520M-A_PRO_DDR4_AM4_29d05f8c-grn.jpg' 
                    addToCart={props.addToCart}
                ></ListItem>
                <ListItem 
                    id= '3'
                    name="Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower" 
                    price="90.000" 
                    url = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18529_Gabinete_Corsair_Crystal_465X_RGB_iCue_Smart_Black_Mid_Tower_b2ac7974-grn.jpg' 
                    addToCart={props.addToCart}
                ></ListItem>
            </div>
        </>
    )
}

export default ItemListContainer;
