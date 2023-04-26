import React from "react";
import styles from "../_productList.module.scss";
import Link from "next/link";

type ProductItemProps = {
    avo: TProduct;
};
const ProductItem = ({ avo }: ProductItemProps) => {
    return (
        <Link className={styles["p-item"]} href={`/product/${avo.id}`}>
            <div className={styles["p-item__img-container"]}>
                <img
                    className={styles["p-item__img-container__img"]}
                    src={avo.image}
                    alt={avo.name}
                />
            </div>
            <div className={styles["p-item__info-container"]}>
                <h6 className={styles["p-item__info-container__name"]}>
                    {avo.name}
                </h6>
                <p className={styles["p-item__info-container__price"]}>
                    {avo.price} $
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
