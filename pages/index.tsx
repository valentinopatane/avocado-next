import ProductItem from "components/ProductList/ProductItem/ProductItem";
import ProductList from "components/ProductList/ProductList";
import gif from "../public/images/avoGiphy.gif";
import Image from "next/image";
export const getServerSideProps = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/avo");
    const { data }: TAPIAvoResponse = await response.json();

    return {
        props: {
            avos: data,
        },
    };
};

const HomePage = ({ avos }: { avos: TProduct[] }) => {
    return (
        <>
            <Image src={gif} alt="avocado-pet" />
            <h1>Welcome to Avocado Next!</h1>
            <h4>My Avocado page built with NextJS & TypeScript :D</h4>

            <ProductList>
                {avos.map((a) => (
                    <ProductItem avo={a} key={a.id} />
                ))}
            </ProductList>
        </>
    );
};

export default HomePage;
