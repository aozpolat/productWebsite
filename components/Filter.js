import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Filter() {
    return (
        <div className="filter">
            <div className="headline">
                <h3>Categories</h3>
            </div>
            
            <div className="categories">
                <div className="option">
                    <input type='checkbox' ></input>
                    <label> Shoes</label><br></br>
                </div>
                <div className="option">
                    <input type='checkbox' ></input>
                    <label> Dresses</label><br></br>
                </div>
                <div className="option">
                    <input type='checkbox' ></input>
                    <label> Trousers</label><br></br>
                </div>
                <div className="option">
                    <input type='checkbox' ></input>
                    <label> Jackets</label><br></br>
                </div>
                <div className="option">
                    <input type='checkbox' ></input>
                    <label> Shirts</label><br></br>
                </div>        
            </div>
            <div className="headline">
                <h3>Price</h3>
            </div>
            <div className="price">
                <div className="priceBlock">
                    <div className="priceSpan">
                        <input type="number" placeholder="Min"></input>                  
                    </div>
                    <div className="range"> - </div>
                    <div className="priceSpan">
                        <input type="number" placeholder="Max"></input>
                    </div>
                </div>
                <button><FontAwesomeIcon icon={faArrowRight} size="lg"/></button>      
            </div>

            <style jsx>{`
                .filter {
                    max-height: 23rem;
                    width: 12rem;
                    margin: 7rem 0 0 4rem;
                    border: 1px solid #e5e5e5;
                    border-radius: 5px;
                }

                .headline {
                    
                    border-bottom: 1px solid;
                }

                .headline h3 {
                    margin: 0.7em;
                }

                .categories {
                    display:flex;
                    flex-direction: column;
                    
                }

                .option {
                    display:flex;
                    align-items: center;
                    margin: 0.3rem 1rem;
                }

                .option input {
                    margin-right: 0.5rem;
                    height: 20px;
                    width: 20px;
                    cursor: pointer;
                }

                .price {
                    display:flex;
                }

                .priceBlock {
                    display:flex;
                    margin-left: 0.4rem;
                }
                .priceSpan, .range {    
                    margin: 1rem 0.25rem;
                    
                }

                .priceSpan input {
                    margin-left: 0.2rem;
                    width: 3rem;
                    padding: 6px 8px;
                    border-radius: 4px;
                    border: 2px solid #bfbfbf;
                }

                /* Chrome, Safari, Edge, Opera */
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                /* Firefox */
                input[type=number] {
                -moz-appearance: textfield;
                }

                .price button {
                    margin: 1rem 0.7rem;
                    background: #e9e0bf;
                }

                .price button:hover {
                    background: #e9d486;
                    cursor: pointer;
                }

            `}</style>
        </div>
    )
}