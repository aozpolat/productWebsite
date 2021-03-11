// will be edited

import {useList} from '../contexts/cartContext'
import Link from 'next/link'

export default function PaymentButton() {
    const {cart, total} = useList();
    const createURL = () => {
        let test = "https://form.jotform.com/210521962653049?";
        cart.forEach( (element, index) => {
           test += `myProducts[special_${element.pid}][item_0]=${element.quantity}&`
        });
        console.log(test);
        const URL = test;
        // "https://form.jotform.com/210521962653049?myProducts[special_1001][item_0]=5&myProducts[special_1000][item_0]=5&myProducts[cc_lastName]=test&myProducts[cc_firstName]=test";

        window.open(URL,"_blank");

    }
        return ( 
            <>
                <Link href="/paymentPage">
                    <a>
                        <button>Go to payment</button>
                    </a>              
                </Link>
                
                <style jsx>{`
                    button {
                        margin: 1.33rem 3rem;
                    }
                `}</style>
            </>
        );    
}