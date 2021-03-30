import { getProductByID } from "../formElements/api";
import Layout from "../components/layout";
import { useList } from "../contexts/cartContext";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Post = ({ product }) => {
  const { cart, addToCart } = useList();
  const today = new Date();
  const deliveryTime = new Date();
  deliveryTime.setDate(today.getDate() + 4);
  const month = deliveryTime.toLocaleString("eng", { month: "short" });
  const deliveryDate = month + " " + deliveryTime.getDate();
  console.log(deliveryDate);
  return (
    <Layout cart={cart}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300"
          rel="stylesheet"
        />
      </Head>
      <div className="detailsContainer">
        <Image src={product.imageUrl} alt="" width={380} height={400} />
        <div>
          <h3> {product.name}</h3>
          <div className="productReview">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
            </div>
            <div className="reviewItems" id="rating">
              5.0
            </div>
            <div className="reviewItems">3 reviews</div>
            <div>12 orders</div>
          </div>
          <h4>${product.price}</h4>
          <div className="shipping">Shipping: $7.79</div>
          <div>
            <div className="delivery">
              <div id="deliveryText">Estimated Delivery on</div>
              <span>{deliveryDate}</span>
            </div>
          </div>

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
        </div>
        <style jsx>{`
          .detailsContainer {
            margin: 50px 12rem;
            display: flex;
            font-family: "Nunito", sans-serif;
            border-bottom: 1px solid #bbb4b4;
          }
          .productReview {
            display: flex;
            align-items: center;
          }

          .stars {
            color: #ffbc00;
          }

          .reviewItems {
            margin: 0 0.5rem;
          }

          #rating {
            font-weight: bold;
          }

          .shipping {
              font-weight: bold;
              margin-top: 2.5rem ;
          }

          .delivery {
             display:flex;
          }

          #deliveryText {
            color: #999;
            margin-right: 0.5rem;
        }
          .addToCart {
            padding: 1rem 4rem;
            border-radius: 4px;
            background: ivory;
            cursor: pointer;
            margin-top: 3rem;
          }

          .addToCart:hover {
            background: #eeeecb;
          }

          h3 {
            color: rgb(92, 92, 92);
            font-size: unset;
            margin-bottom: 0.5rem;
          }

          h4 {
            font-size: x-large;
            margin: 1.6rem 0 0;
            color: #cea23f;
}
          }
        `}</style>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const product = await getProductByID(params.id - 1);
  return {
    props: { product },
  };
};

export default Post;
