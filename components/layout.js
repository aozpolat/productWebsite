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
                <h6 key = {index}>{cartItem.name}</h6>
            ))}
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