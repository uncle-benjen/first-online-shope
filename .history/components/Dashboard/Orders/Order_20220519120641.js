import Image from "next/image";
import styles from './Order.module.css';

const Order = () =>{
    return(
        <div className={styles.cardContainer}>
            <div className={styles.orderDescription}>
                <div className={styles.state} >
                    <span>تحویل شده</span>
                  <Image src="/static/icons/tick-circle.svg" alt="Tick Icon"
                      width={18} height={18}/>
                </div>
                <div className={styles.info}>
                    <span className={styles.date}>۷ اسفند ۱۳۹۸</span>
                    <div className={styles.price}>
                        <span>مبلغ سفارش</span> <span>200000</span>
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.itemImg}>
                    <Image src="/static/img/shirt.png" alt="item Image"
                      width={150} height={150}/>
                </div>
            </div>
        </div>
    );
};
export default Order;