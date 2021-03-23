import Head from "next/head";
import { getProductsForPage } from "../formElements/api";
import Layout from "../components/layout";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";
import Filter from "../components/Filter";

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
  const router = useRouter();
  const pageNumber = Math.ceil(products.length / products.productsPerPage);

  const paginate = (page) => {
    router.push({
      pathname: "/",
      query: { ...router.query, page },
    });
  };
  const removeCategoryFilter = (category) => {
    if (!Array.isArray(router.query.category))
      router.push({
        pathname: "/",
        query: { category: [] },
      });
    else {
      const newArr = router.query.category.filter((item) => item !== category);
      router.push({
        pathname: "/",
        query: { category: newArr },
      });
    }
  };
  const filter = (category) => {
    if (router.query.category) {
      const currentCategories = router.query.category;
      if (Array.isArray(currentCategories)) {
        currentCategories.push(category);
        router.push({
          pathname: "/",
          query: { ...router.query, category: currentCategories, page: 1 },
        });
      } else {
        const categoryArr = [];
        categoryArr.push(currentCategories);
        categoryArr.push(category);
        router.push({
          pathname: "/",
          query: { ...router.query, category: categoryArr, page: 1 },
        });
      }
    } else {
      router.push({
        pathname: "/",
        query: { ...router.query, category, page: 1 },
      });
    }
  };

  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Products</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Filter filter={filter} removeCategoryFilter={removeCategoryFilter} />
        <main>
          <h1 className="title">Welcome</h1>
          <Products products={products.currentProducts} />
          <Pagination
            pageNumber={pageNumber}
            paginate={paginate}
            currentPage={currentPage}
          />
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
