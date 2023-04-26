import React, { PropsWithChildren } from "react";
import styles from "./_productList.module.scss";

const ProductList: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles["p-list"]}>{children}</div>;
};

export default ProductList;
