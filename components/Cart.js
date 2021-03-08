

const Cart = ({setIsHidden , isHidden}) => {

    const clickCart = () => {
        console.log("clicked")
        isHidden === "show" ? setIsHidden("hidden") : setIsHidden("show")
    }

    return (
        <>
        <button  onClick={clickCart}>Cart</button>
        <style jsx>{`
            button {
                background-color: #9ad8d7;
                margin-right: 15px;
                padding: 0.4rem 1rem;
                border-color:#9ad8d7;
                border-radius: 6px;
            }
        
        
        `}</style>
        </>
    );


}

export default Cart;