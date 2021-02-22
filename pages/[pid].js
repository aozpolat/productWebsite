import { useRouter } from 'next/router'
import {products} from '../elements/products'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  
  console.log(pid)
  return ( 
    <div className="detail">
         <img src={`https://picsum.photos/id/${Number(pid) + 20}/400/200`} alt=""></img>
        <h4> {products[pid-1].detail}</h4> 
        
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


 
export default Post