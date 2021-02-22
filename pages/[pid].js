import {getProductByID} from '../elements/products'


const Post = ({pid}) => {
 const product = getProductByID(pid-1);
 return ( 
    <div className="detail">
         <img src={`https://picsum.photos/id/${Number(pid) + 20}/400/200`} alt=""></img>
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
    const pid = params.pid;
    return {
       props: { pid }
    }
 }
 
export default Post