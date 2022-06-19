import styles from "./SmallCard.module.css";
import Image from "next/image";
import { useCart } from "react-use-cart";
import Link from "next/link";

const SmallCard =(props)=>{
    const { addItem } = useCart();

    const formatToCurrency = amount => {
        return amount.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      };
    return( 
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <div className={styles.imgWrapper}>
                    <Image className={styles.img} src={props.cards.imgSrc} alt="User Dashbourd"
                        layout="fill" objectFit="cover"/>
                </div>
                {/* <img src={props.cards.imgSrc} alt="item image"/> */}
            </div>
            <div className={styles.contentBx}>
                <h3 >{props.cards.title}</h3>
                <h2 className={styles.price}>{formatToCurrency(props.cards.price)}</h2>
              <Link href="#">  
                <a className={styles.buy} onClick={()=>{addItem(props.cards)}}>خرید</a>
              </Link>
            </div>
        </div>
    );
}

export default SmallCard;