import Head from 'next/head'
import {getProducts} from '../formElements/api'
import Layout from '../components/layout'
import { useState } from 'react'
import Products from '../components/Products'
import Pagination from '../components/Pagination'


export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products
    }
  }
}

export default function Home({products}) {
    const [currentPage, setCurrenPage] = useState(1);
    const [productsPerPage] = useState(6);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = Math.ceil(products.length / productsPerPage);

    const paginate = (number) => {
        setCurrenPage(number);
    }
    return (
        <Layout home >
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
                <Products products = {currentProducts}/>
                <Pagination  pageNumber = {pageNumber} paginate = {paginate} currentPage = {currentPage} />               
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

