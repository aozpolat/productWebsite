

const Cart = ({setIsHidden , isHidden}) => {

    const clickCart = () => {
        isHidden === "show" ? setIsHidden("hidden") : setIsHidden("show")
    }

    return (
        <>
        <button  onClick={clickCart}>Cart</button>
        <style jsx>{`
            button {
                background-color: #e8ebeb;
                margin-right: 25px;
                padding: 0.4rem 1rem;
                border-radius: 3px;
            }
        
        
        `}</style>
        </>
    );


}

export default Cart;