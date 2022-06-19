import styles from "./HeaderCartBtn.module.css"
import Image from "next/image";
import { useCart } from "react-use-cart";
import Header from "./Header";
const HeaderCartBtn = (props) =>{

const {totalUniqueItems} = useCart();

    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <Image className={styles.buy} src="/static/icons/shopping-cart.svg" alt="shoping cart icon"
                    layout="fill" objectFit="cover"/>
            </span>
            <span className={styles.badge}>{totalUniqueItems}</span>
        </button>
    );
};


export default HeaderCartBtn;