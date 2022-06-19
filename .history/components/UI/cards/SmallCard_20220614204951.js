import styles from "./SmallCard.module.css";


const SmallCard =(props)=>{
    console.log(props.cards.id);
    return( 
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <img src={props.cards.imgSrc} alt="item image"/>
            </div>
            <div className={styles.contentBx}>
                <h3 >پییراهن طرح دار</h3>
                <h2 className={styles.price}>$40</h2>
                <a className={styles.buy}>خرید</a>
            </div>
        </div>
    );
}

export default SmallCard;