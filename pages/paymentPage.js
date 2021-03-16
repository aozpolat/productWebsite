// will be edited
import {useList} from '../contexts/cartContext'

import Layout from '../components/layout';
export default function CreditCart(){
    const {URL} = useList();
    console.log(URL);
    return(
            <Layout payment>    
                 <iframe src={`${URL}`}></iframe>


                 <style jsx>{`
                  iframe {
                    width: 70%;
                    height: 40rem;
                    margin: 0 10rem;
                  }  
                 `}</style>
            </Layout>   

            
    );
}