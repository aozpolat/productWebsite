

export default function Pagination({pageNumber, paginate , currentPage}) {
    return ( 
            <div className='container'>
                {[...Array(pageNumber)].map((_, number) =>  currentPage === number + 1 ? 
                (
                        <a onClick= {() => paginate(number + 1)} key = {number} className='currentPage'>
                            {number + 1}
                        </a>               
                ) :
                (
                    <a onClick= {() => paginate(number + 1)} key = {number} >
                        {number + 1}
                    </a>  
                )
                )}
                
            

                <style jsx>{`
                    .container {
                        display: flex;
                    }

                    a {
                        margin: 3rem 0.3rem 1rem;
                        padding: 0.4rem;
                        border: 1px solid black;
                        cursor: pointer;
                    }

                    a:hover {
                        background: #d1d1d1;
                        text-decoration: none;
                    }

                    .currentPage {
                        background: #d1d1d1;
                    }
                
                `}


                </style>

            </div>
    )
}