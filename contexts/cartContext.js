import {useState, createContext, useContext, useEffect} from 'react';

export const Context = createContext();
export const useList = () => useContext(Context);

export default function CartContext(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
         if(cart.length !== 0)
              localStorage.setItem('cart', JSON.stringify(cart))
  
          else if (localStorage.getItem('cart') === null)  {
                        
                  localStorage.setItem('cart', JSON.stringify(cart))
          }   
      
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

    return (
        <Context.Provider
          value={{
            cart: cart,
            setCart: setCart
          }}
        >
          {props.children}
        </Context.Provider>
      );
}