import Navbar from '../navbar/Navbar'


function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}

export default Layout;