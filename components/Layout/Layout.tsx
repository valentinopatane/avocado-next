import Navbar from "components/Navbar/Navbar";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="body">{children}</main>
        </div>
    );
};

export default Layout;
