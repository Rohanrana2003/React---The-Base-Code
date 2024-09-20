import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import  {clearCart}  from "../utils/ReduxStore/cartSlice";


const Cart = () =>{

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClear = () =>{

        dispatch(
            clearCart()
        )
    }

    return cartItems.length === 0? <h1 className="cart">Cart is Empty!</h1>:(

        <div className="cart">

            <h1>Cart</h1>


            <div className="components">

                <button className="clear" onClick={handleClear}>Clear Cart</button>
                <ItemList item={cartItems}/>

            </div>
            
        </div>
    )
}

export default Cart