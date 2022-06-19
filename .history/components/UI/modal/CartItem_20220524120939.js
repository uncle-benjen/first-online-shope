import styles from "./CartItem.module.css";
import Image from "next/image";
const CartItem = (props) =>{
    const url  = props.item.img;
    console.log(props);
    return(
        <div className={styles.container}>
            <div className={styles.actions}>
                <div>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>−</button>
                    <span className={styles.amount}> {props.item.quantity}</span>
                    <button onClick={props.onAdd}>+</button>
                </div>
                <div className={styles.totalPrice}>
                    <span>مبلغ کل</span>
                    <span> 200000</span>
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