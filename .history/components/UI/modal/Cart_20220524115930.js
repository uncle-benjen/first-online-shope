import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { loggedIn } from "../../../lib/magicClient";
import { useCart } from "react-use-cart";
const Cart = (props) =>{
    const router = useRouter();
    // const items =
    // [
    //     {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"/static/img/profile.jpg"},
    //     {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"/static/img/profile.jpg"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/profile.jpg"},
    // ];
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    console.log(items);
      if (isEmpty) return <p>Your cart is empty</p>;
    

    const clickHandler = (e) =>{
        e.preventDefault();
        const isLoggedIn = loggedIn();
        isLoggedIn ? router.push(`/`) : router.push(`/login`);
        props.onClose();
    };
    return(
        <Modal onClose={props.onClose}>
            <div className={styles.container}>
                <h2> ({totalUniqueItems})سبد خرید</h2>
                <div className={styles.cardList}>
                    {items.map((item, index)=>{
                        return(
                            <CartItem key={index} item={item}/>
                        );
                    })}
                </div>
                <div className={styles.total}>
                    <div className={styles.prices}>
                        <span>قیمت کل:</span> <span>{cartTotal}</span>
                    </div>
                    <button className={styles.btn} onClick={clickHandler}>ادامه</button>
                </div>
            </div>
        </Modal>
    );
};
export default Cart;