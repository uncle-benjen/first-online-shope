import Image from "next/image";
import styles from './Order.module.css';

const Order = () =>{
    return(
        <div className={styles.cardContainer}>
            <div></div>
            <div className={styles.items}>
                <div className={styles.itemImg}>
                    <Image src="/static/img/shirt.png" alt="item Image"
                      width={18} height={18}/>
                </div>
            </div>
        </div>
    );
};
export default Order;