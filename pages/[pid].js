import {getProductByID} from '../formElements/api'
import Layout from '../components/layout'


const Post = ({product, cart}) => {
 return ( 
    <Layout cart = {cart}>
    <div className="detail">
        <img src={product.imageUrl} alt=""></img>
        <h4> {product.name}</h4> 
        
        <style jsx>{`
            .detail {
                margin: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Nunito', sans-serif;
            }
        `}</style>
    </div>
    </Layout>
  )
}

export const getServerSideProps = async ({params}) => {
    const product = await getProductByID(params.pid-1); 
    return {
       props: { product }
    }
    
 }
 
export default Post