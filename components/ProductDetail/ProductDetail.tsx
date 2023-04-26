import React, { useState } from "react";
import styles from "./_productDetail.module.scss";

type ProductItemProps = {
    avo: TProduct;
};
const ProductDetail = ({ avo }: ProductItemProps) => {
    return (
        <div>
            <div className={styles["pd-item__img-container"]}>
                <img
                    className={styles["pd-item__img-container__img"]}
                    src={avo?.image}
                    alt={avo?.name}
                />
            </div>
            <div className={styles["pd-item__info-container"]}>
                <h6 className={styles["pd-item__info-container__name"]}>
                    {avo?.name}
                </h6>
                <p className={styles["pd-item__info-container__price"]}>
                    {avo?.price}
                </p>
                <p>{avo?.attributes?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
