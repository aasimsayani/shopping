import { useEffect } from "react" 
import type { InferGetStaticPropsType } from "next" 
// import play from "../examples/playground"
import getAllProducts from "../framework/shopify/products/get-all-products"

export async function getStaticProps() {
    //const products = [1,2,3]
    const products = await getAllProducts();

    return {
        props: {
            products
        },
        revalidate: 4 * 60 * 60
    }
}

export default function Home({
    products
    //const message: string = "hello world"
}: InferGetStaticPropsType<typeof getStaticProps>) {
    // useEffect(() => {
    //     play()
    // }, [])

    return (
        // <div>{message}</div>
        <div>{JSON.stringify(products)}</div>
    )

}