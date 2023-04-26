import React from "react";
import ProductDetail from "components/ProductDetail/ProductDetail";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/avo`);
    const { data: productList }: TAPIAvoResponse = await response.json();

    const paths = productList.map((p) => {
        return {
            params: {
                id: p.id,
            },
        };
    });
    //fallback:false makes non specific paths a 404 response
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string;
    const response = await fetch(`http://127.0.0.1:3000/api/avo/${id}`);
    const { data }: { data: TProduct } = await response.json();

    return {
        props: {
            product: data,
        },
    };
};

const ProductPage = ({ product }: { product: TProduct }) => {
    return <ProductDetail avo={product} />;
};

export default ProductPage;
