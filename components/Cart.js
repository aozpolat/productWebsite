import {useList} from '../contexts/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const Cart = ({setIsHidden , isHidden}) => {
    const {total} = useList();
    const clickCart = () => {
        isHidden === "show" ? setIsHidden("hidden") : setIsHidden("show")
    }

    return (
        <>
        
        <button  onClick={clickCart}><div className="icon"> <FontAwesomeIcon icon={faShoppingCart} size="lg"/> </div>  <div className="total">{`$${total}`}</div></button>
        <style jsx>{`
            button {
                background-color: #efefc2;
                margin-right: 5rem;
                padding: 0 1rem 0 0;
                border-radius: 3px;
                display: flex;
            }

            button:hover {
                background-color: #e3e35e;
            }
            .icon {
                border-right: 2px solid black;
                padding: 0.4rem;
            }

            .total {
                padding: 0.4rem 0.4rem 0.4rem 1rem;
            }
        
        `}</style>
        </>
    );


}

export default Cart;