import styles from "./SmallCard.module.css";
import Image from "next/image";


const SmallCard =(props)=>{
    console.log(props.cards.id);
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
                <h2 className={styles.price}>${props.cards.price}</h2>
                <a className={styles.buy}>خرید</a>
            </div>
        </div>
    );
}

export default SmallCard;