// will be edited

import Layout from '../components/layout';
export default function CreditCart(){

    return(
            <Layout payment>    
                <div className="container">
                    <h2>Credit Cart Details</h2>
                    <div className="fields">
                        <div className="row">
                            <div className="column">
                                <input type="text"></input>
                                <br/>
                                <label>First Name</label>  
                            </div>

                            <div className="column">
                                <input type="text"></input>
                                <br/>
                                <label>Last Name</label>  
                            </div>           
                        </div>
                        <div className="row">
                            <div className="column">
                                <input type="number"></input>
                                <br/>
                                <label>Credit Card Number</label>  
                            </div>

                            <div className="column">
                                <input type="number"></input>
                                <br/>
                                <label>CVV</label>  
                            </div>           
                        </div>

                        <div className="row">
                            <div className="column">
                                <select name='expireMM' id='expireMM'>
                                    <option value=''>Month</option>
                                    <option value='01'>January</option>
                                    <option value='02'>February</option>
                                    <option value='03'>March</option>
                                    <option value='04'>April</option>
                                    <option value='05'>May</option>
                                    <option value='06'>June</option>
                                    <option value='07'>July</option>
                                    <option value='08'>August</option>
                                    <option value='09'>September</option>
                                    <option value='10'>October</option>
                                    <option value='11'>November</option>
                                    <option value='12'>December</option>
                                </select> 
                                <select name='expireYY' id='expireYY'>
                                    <option value=''>Year</option>
                                    <option value='21'>2021</option>
                                    <option value='22'>2022</option>
                                    <option value='23'>2023</option>
                                    <option value='24'>2024</option>
                                </select> 
                                <br/>
                                <label>Card Expiration</label>
                            </div>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
                <style jsx>
                {`
                    .container {
                        background: floralwhite;
                        border-radius: 6px;
                        margin: 40px auto; 
                        width: 30%;
                        box-shadow:3px 3px 5px 6px #ccc;
                    }
                    
                    .fields {
                        padding: 0 2rem;
                    }
                    .row {
                        display:flex;
                        margin: 20px 0;
                    }
                    
                    .column {
                        width: 50%;
                    }
                    
                    input {
                        resize: horizontal;
                        width: 90%;
                    }
                    
                    button {
                        margin: auto 1rem auto auto;
                        padding: 0.4rem 1rem;
                        background: aliceblue;
                    }

                    button:hover {
                        background: #cfe1f1;
                    }
                    h2 {
                        text-align: center;
                        border-bottom: 1px solid black;
                    }
                `}</style>
            </Layout>   
        
    );
}