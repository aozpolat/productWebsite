import {getProductByID} from '../elements/products'


const Post = ({product}) => {
 return ( 
    <div className="detail">
         <img src={`https://picsum.photos/id/${product.id + 20}/400/200`} alt=""></img>
        <h4> {product.detail}</h4> 
        
        <style jsx>{`
            .detail {
                margin: 50px;
                text-align: center;
                font-family: 'Nunito', sans-serif;
            }
        `}</style>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const product = getProductByID(params.pid-1);
    return {
       props: { product }
    }
 }
 
export default Post