import styles from "./CartItem.module.css";
import Image from "next/image";
import { useCart } from "react-use-cart";

const CartItem = (props) =>{
    const { updateItemQuantity } = useCart();
    return(
        <div className={styles.container}>
            <div className={styles.actions}>
                <div>
                    <button onClick={() => updateItemQuantity(props.item.id, props.item.quantity - 1)}>−</button>
                    <span className={styles.amount}> {props.item.quantity}</span>
                    <button onClick={() => updateItemQuantity(props.item.id, props.item.quantity + 1)}>+</button>
                </div>
                <div className={styles.totalPrice}>
                    <span>مبلغ کل</span>
                    <span>{ props.item.quantity * props.item.price}</span>
                </div>
            </div>
            <div className={styles.cartItem}>
                <div className={styles.itemInfo}>
                    <h2>بلوز مدل25</h2>
                    <div className={styles.summary}>
                        <span className={styles.price}>{props.item.category}</span>
                        <span className={styles.price}>20000</span>
                    </div>
                </div>
                <div className={styles.itemImg}>
                    <Image className={styles.img} src={props.item.imgSrc} alt="item image"
                        width={250} height={200}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;