import styles from "./SmallCard.module.css";
import Image from 'next/image';


const SmallCard =()=>{
    return( 
        <div className={styles.card}>
            <div className={styles.imgBx}>
                {/* <div className={styles.imgWrapper}> */}
                <Image className={styles.img} src="/static/img/shirt.png" alt="item image"
                    layout="fill" objectFit="cover"/>
            {/* </div> */}
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