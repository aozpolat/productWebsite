import Head from 'next/head'
import Link from 'next/link'
import {getProducts} from '../formElements/api'
import Layout from '../components/layout'
import {useList} from '../contexts/cartContext'


export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products
    }
  }
}

export default function Home({products}) {
  const {cart, addToCart} = useList();

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
            <div className="grid">
                {products.map( (product, index) => (  
                    <div className="card" key={index + 1}>
                      <Link href={`/${index + 1}`}  > 
                        <a> 
                          <img src={product.imageUrl} alt=""></img>
                          <h3>{product.name} </h3>
                          <h5>Click for more info</h5>
                        </a>
                      </Link>
                      <button onClick={() => addToCart({pid: product.pid, name: product.name, price: product.price})} className="addToCart">Add to Cart</button>
                    </div>       
                 
                ))}
            </div>
        </main>
        

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 1rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          img {
            width: 150px;
            height: auto;
            margin: auto;
          }

          .addToCart {
            margin: auto;
            padding: 0.4rem;
            border-radius: 4px;
            background: ivory;
            cursor: pointer;
          }

          .addToCart:hover {
            background: #eeeecb
          }
        `}</style>
      </div>
    </Layout>
  )
}

