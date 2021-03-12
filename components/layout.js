import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import Cart from './Cart'
import {useState} from 'react'
import {useList} from '../contexts/cartContext'



export default function Layout({ children, home, payment}) {
  const {cart, total, clearCart, createURL} = useList();
  const [isHidden, setIsHidden] = useState('hidden');


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Cart setIsHidden = {setIsHidden} isHidden = {isHidden}/>
      </header>

      <div className={styles[isHidden]}>
          <div className={styles.cartItems}>
            {cart.map( (cartItem, index) => (
                <h5 key = {index}>{`${cartItem.quantity}x`}  {cartItem.name}:    ${cartItem.price * cartItem.quantity}</h5>
            ))}
          </div >
          <div > 
            <h4 className={styles.cartTotal}>Total: ${total} </h4>
            
          </div>
          <div className={styles.totalAndBuy}>
            {!payment && total != 0 && (
                <button onClick={clearCart} className={styles.clearCart}>Clear the cart</button>
            )}

            {!payment && total != 0 && (
                <Link href="/paymentPage">
                  <a>
                    <button onClick={createURL} className={styles.goToPayment}>Go to payment</button>
                  </a>              
                </Link>
            )}

          </div>
            
            
      </div>          
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to mainpage</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>  
      </footer>

    </>
  )
}