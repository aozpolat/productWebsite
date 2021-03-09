import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import Cart from './Cart'
import {useState} from 'react'
import {useList} from '../contexts/cartContext'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home}) {
  const {cart} = useList();
  const [isHidden, setIsHidden] = useState('hidden');

  const total = cart.reduce( (acc , currentItem) => {
      const cost = currentItem.price * currentItem.quantity;
      return acc + cost;
  }, 0)

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
                <h6 key = {index}>{cartItem.name} - {cartItem.quantity}</h6>
            ))}
          </div >  
          <h5 className={styles.cartTotal}>Total: {total} $</h5>
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