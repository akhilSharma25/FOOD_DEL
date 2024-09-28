// import { useContext, useState } from "react"
// import { assets } from "../../assets/assets"
// import "./FoodItem.css"
// import { StoreContext } from "../../Context/StoreContext"

// export const FoodItem=({id,name,price,description,image})=>{

//     const[itemCount,setItemCount]=useState(0)

//     const {cartItems,addToCart,removeFromCart}=useContext(StoreContext) // niche h implement this is best practice rather than useState
//     return(

//         <div className="food-item">

//             <div className="food-item-img-container">
//                 <img className="food-item-image" src={image} alt="" />
//                 {
//                  !itemCount
                
//                  ? <img className="add"  onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" /> :
//                   <div className="food-item-counter">
//                     <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
//                     <p>{itemCount}</p>
//                     <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
//                   </div>
//                 }
//             </div>

//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">${price}</p>
//             </div>
//         </div>
//     )
// }


import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../Context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
