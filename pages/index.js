import Head from 'next/head'
import {getProductsForPage} from '../formElements/api'
import Layout from '../components/layout'
import Products from '../components/Products'
import Pagination from '../components/Pagination'
import { useRouter } from 'next/router'
import Filter from '../components/Filter'

export async function getServerSideProps({ query: { page = 1, category} }) {
    const products = await getProductsForPage(page);
    return {
        props: {
            currentPage:page,
            products,
        }
    }
}

export default function Home({products, currentPage}) {
    const router = useRouter()
    const pageNumber = Math.ceil(products.length / products.productsPerPage);

    const paginate = (number) => {
        router.push(`/?page=${number}`);
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

                <Filter />
                <main>
                    <h1 className="title">
                        Welcome 
                    </h1>  
                    <Products products = {products.currentProducts}/>
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
                    margin-right: 5rem;
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

