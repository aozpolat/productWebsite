import {getProductByID} from '../elements/api'


const Post = ({product}) => {
 return ( 
    <div className="detail">
         <img src={product.imageUrl} alt=""></img>
        <h4> {product.name}</h4> 
        
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
    let product;
    const res = await getProductByID(params.pid-1);
    product = res;
    return {
       props: { product }
    }
    
 }
 
export default Post