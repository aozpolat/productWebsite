import '../styles/global.css';
import {useState, useEffect} from 'react'

export default function App({ Component, pageProps }) {
    const [cart, setCart] = useState([]);

  useEffect(() => {
    if(cart.length !== 0) 
       localStorage.setItem('cart', JSON.stringify(cart))
    

    return () => {
      const data = localStorage.getItem('cart');
      if(data  !== JSON.stringify(cart)) {
        setCart(JSON.parse(data));
      }
    }

  }, [cart]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, []);

    return <Component {...pageProps} cart={cart} setCart={setCart}  />
}