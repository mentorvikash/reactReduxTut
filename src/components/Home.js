import React from 'react'

const Home = () => {
    return (
        <>
            <h1>Home Component</h1>
            <div className='card-wrapper item'>
                <div className='img-wrapper item'>
                    <img src='https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w=' />
                </div>
                <div>
                <div className='phone-detail'>
                    <span><b>I-phone</b></span>
                    <span><b>Price $1000</b></span><br/>
                    </div>
                    <button className='button-wrapper'>
                        <span>Add to cart</span>
                    </button>

                </div>

            </div>
        </>
    )
};

export default Home;