import React, { useState } from "react";


function Shoes () {


    
    const [cartItems, setCartItems] = useState([])
    const [totalCost, setTotalCost] = useState(0)

    const handleClick = (title, price) => {
        setCartItems([...cartItems, { title, price }]);
        setTotalCost(totalCost+price);
    }
    
    const handleClear = () => {
        setTotalCost(0)
        setCartItems([])
    }

    return (
        <>
            <div className="Items-Container">
                
                <div>
                    <h1 className="heading">Welcome to ShoeKart</h1>
                    <div className="Shoes-Container">
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/30707531/pexels-photo-30707531.jpeg" class="card-img" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Adidas</h5>
                                <p className="price-tag">$50</p>
                                <button class="btn btn-success" onClick={() => handleClick("Nike",50)}>Add to Cart</button>
                            </div>
                        </div>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg" class="card-img" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Nike</h5>
                                <p className="price-tag">$75</p>
                                <button class="btn btn-success" onClick={() => handleClick("Adidas",75)}>Add to Cart</button>
                            </div>
                        </div>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/6050914/pexels-photo-6050914.jpeg" class="card-img"  alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Nova</h5>
                                <p className="price-tag">$30</p>
                                <button class="btn btn-success" onClick={() => handleClick("Nova",30)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cart-Container">
                <h1>Items in Your Cart</h1>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price}
                        </li>
                    ))}
                </ul>
                <button class="btn btn-primary" onClick={() => handleClear()}>Clear Cart</button>
                <h2>${totalCost}</h2>

                
            </div>
        </>
    )
}

export default Shoes