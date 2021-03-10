import {useState, createContext, useContext, useEffect} from 'react';

export const Context = createContext();
export const useList = () => useContext(Context);

export default function CartContext(props) {
    const [cart, setCart] = useState([]);

    const addToCart = (input) => {
        const {pid, name, price} = input;
        const quantity = isExists(name) + 1;
        if( quantity == 1)     
            setCart([
            ...cart, 
            {pid, name, price, quantity}
            ]);
        else {
            const newCart = cart.map( (cartItem) => {
                    if ( cartItem.name === name){
                        const oldQuantity = cartItem.quantity;
                        return {...cartItem, quantity: oldQuantity + 1}
                    }
                    return cartItem;
                
            })
            setCart(newCart);
        }    
      };

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

    const isExists = (itemName) => {
        if (cart.length === 0 )  return 0;
        for (const cartItem of cart) {
            if ( itemName === cartItem.name) {
                return cartItem.quantity;
            }
        }

        return 0;
    }
    return (
        <Context.Provider
          value={{
            cart: cart,
            addToCart: addToCart
          }}
        >
          {props.children}
        </Context.Provider>
      );
}