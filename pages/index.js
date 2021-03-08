import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {getProducts} from '../elements/api'
import Cart from '../components/Cart'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isHidden, setIsHidden] = useState('show');

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);
 
  
  return (
    <div className="container">
      <Head>       
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"/>     
      </Head>

     
      <header >
        <Cart setIsHidden = {setIsHidden} isHidden = {isHidden}/>
      </header>

      <div className="content-container">
        <div className={isHidden}>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>

        <main>
          <h1 className="title">
            Welcome 
          </h1>
          <div className="grid">
              {products.map( (product, index) => (
                <Link href={`/${index + 1}`} key={index + 1} > 
                  <a className="card"> 
                  <img src={product.imageUrl} alt=""></img>
                  <h3>{product.name} </h3>
                  <p>Click for more info</p>
                  </a>       
                </Link>
              ))}
          </div>
        </main>
      </div>
      <footer>     
      </footer>

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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
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
          text-align: center;
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
        }

        header {
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .show {
          height: fit-content;
          width: 350px;
          position: absolute;
          right: 0;
          border-radius: 6px;
          border: 2px solid #9ad8d7;
        }

        .hidden {
          display:none;
       }
       
       .content-container {
         width: 100%;
         position: relative;
       }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

