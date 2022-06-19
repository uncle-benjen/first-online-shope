import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { loggedIn } from "../../../lib/magicClient";
import { useCart } from "react-use-cart";
import NotFoundElement from "../../notFound/NotFoundElement";
const Cart = (props) =>{
    const router = useRouter();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
      } = useCart();
      if (isEmpty) return(
          <Modal onClose={props.onClose}>
               <div className={styles.container}>
                    <h2> ({totalUniqueItems})سبد خرید</h2>
                    <div className={styles.cardList}>
                        <NotFoundElement />
                    </div>
                </div>

          </Modal>
      ) ;
    

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
                            <CartItem
                                key={index} 
                                item={item}
                                updateItemQuantity
                                removeItem
                            />
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