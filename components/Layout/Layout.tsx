import Navbar from "components/Navbar/Navbar";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
