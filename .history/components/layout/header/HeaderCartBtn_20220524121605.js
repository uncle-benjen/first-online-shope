import styles from "./HeaderCartBtn.module.css"
import Image from "next/image";
import { useCart } from "react-use-cart";

const HeaderCartBtn = (props) =>{

const {totalUniqueItems} = useCart();
//   const btnClass = `${styles.button} ${btnIsHighLight ? styles.bump : ""}`;

    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <Image className={styles.buy} src="/static/icons/shopping-cart.svg" alt="shoping cart icon"
                    width={24} height={24}/>
            </span>
            <span className={styles.badge}>{totalUniqueItems}</span>
        </button>
    );
};


export default HeaderCartBtn;