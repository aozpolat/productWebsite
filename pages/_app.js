import "../styles/global.css";
import CartContext from "../contexts/cartContext";
import "../styles/bannerStyles.css";
export default function App({ Component, pageProps }) {
  return (
    <CartContext>
      <Component {...pageProps} />
    </CartContext>
  );
}
