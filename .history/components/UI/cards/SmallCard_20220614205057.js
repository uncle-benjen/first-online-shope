import styles from "./SmallCard.module.css";


const SmallCard =(props)=>{
    console.log(props.cards.id);
    return( 
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <img src={props.cards.imgSrc} alt="item image"/>
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