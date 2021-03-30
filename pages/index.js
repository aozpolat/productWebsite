import Head from "next/head";
import { getProductsForPage } from "../formElements/api";
import Layout from "../components/layout";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import ScrollTop from "../components/ScrollTop";

export async function getServerSideProps({
  query: { page = 1, category = "all", min = 0, max = 9999 },
}) {
  const products = await getProductsForPage(page, category, min, max);
  return {
    props: {
      currentPage: page,
      products,
    },
  };
}

export default function Home({ products, currentPage }) {
  const pageNumber = Math.ceil(products.length / products.productsPerPage);

  return (
    <Layout home>
      <Banner />
      <div className="container">
        <Head>
          <title>Products</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Filter />
        <main>
          <Products products={products.currentProducts} />
          <Pagination pageNumber={pageNumber} currentPage={currentPage} />
        </main>
        <ScrollTop />
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            justify-content: center;
          }

          main {
            padding: 1rem;
            margin-right: 4rem;
            margin-top: 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
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
  );
}
