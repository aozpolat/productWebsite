import Head from 'next/head'
import Link from 'next/link'
import {getProducts} from '../formElements/api'
import Layout from '../components/layout'
import {useList} from '../contexts/cartContext'
import { useState } from 'react'
import Products from '../components/Products'


export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products
    }
  }
}

export default function Home({products}) {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrenPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);

    const {cart} = useList();

    return (
        <Layout home cart={cart}>
            <div className="container">
            <Head>       
                <title>Products</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"/>     
            </Head>
            <main>
                <h1 className="title">
                    Welcome 
                </h1>  
                <Products products= {products}/>
                
            </main>
            

            <style jsx>{`
                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;       
                justify-content: center;   
                }

                main {
                padding: 1rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title {
                text-align: center;
                }

                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }

            `}</style>
            </div>
        </Layout>
    )
}

