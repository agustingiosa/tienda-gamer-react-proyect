import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Destacados from "../../components/destacados/Destacados";
import './estilosHome.css'

const Home = () => {
    return (
        <Layout>
            <div>
                <div className="estilosPrincipal">
                    <h2 className='subtitulo'>Productos destacados</h2>
                    <Destacados/>
                </div>
            </div>
        </Layout>
    )
}

export default Home