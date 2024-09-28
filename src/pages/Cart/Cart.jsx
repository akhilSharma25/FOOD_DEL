import { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../Context/StoreContext.jsx"
import { useNavigate } from "react-router"

export const Cart=()=>{

 const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
 console.log(cartItems);
 
 console.log(food_list);
 
 const navigate=useNavigate()
    return(

        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />

                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0){
                        return(
                           <>
                            <div className="cart-items-title cart-items-item" key={item._id}>
                               <img src={item.image} alt="" /> 
                               <p>{item.name}</p>
                               <p>${item.price}</p> 
                               <p>{cartItems[item._id]}</p>        
                               <p>${item.price*cartItems[item._id]}</p>    
                               <p className="cross" onClick={()=>removeFromCart(item._id)}>x</p>                 
                            </div>
                            <hr />
                           
                           </>
                        )
                    }
                })}
            </div>


        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cart-total-details">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                    </div>
                </div>
                <button onClick={()=>navigate('/order')}>Process TO CheckOut</button>

            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have a promo code,Enter it here</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}