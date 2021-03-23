import Link from "next/link";
import { useList } from "../contexts/cartContext";

export default function Products({ products }) {
  const { addToCart } = useList();
  return (
    <div className="grid">
      {products.map((product, index) => (
        <div className="card" key={index + 1}>
          <Link href={`/${index + 1}`}>
            <a>
              <img src={product.imageUrl} alt=""></img>
              <h3>{product.name} </h3>
              <h5>Click for more info</h5>
            </a>
          </Link>
          <div className="productContainer">
            <button
              onClick={() =>
                addToCart({
                  pid: product.pid,
                  name: product.name,
                  price: product.price,
                })
              }
              className="addToCart"
            >
              Add to Cart
            </button>
            <h3>${product.price}</h3>
          </div>
        </div>
      ))}

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1000px;
          margin-top: 2rem;
        }

        .card {
          margin: 0.5rem;
          flex-basis: 48%;
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

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          width: 150px;
          height: auto;
          margin: auto;
        }

        .addToCart {
          margin: 0.5rem 0;
          padding: 0.4rem;
          border-radius: 4px;
          background: ivory;
          cursor: pointer;
        }

        .addToCart:hover {
          background: #eeeecb;
        }

        .productContainer {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
