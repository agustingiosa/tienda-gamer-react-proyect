// Layout.jsx
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import NavbarSide from "../SideNavbar/SideNavbar";

const Layout = React.memo(({ children }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "250px" }}>
                {children}
            </div>
        </>
    );
});

export default Layout;
