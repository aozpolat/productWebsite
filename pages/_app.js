import '../styles/global.css';
import CartContext from '../contexts/cartContext'

export default function App({ Component, pageProps }) {

    return <CartContext> <Component {...pageProps}  /> </CartContext>
}