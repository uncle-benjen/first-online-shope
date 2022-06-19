import Image from "next/image";
import styles from './Order.module.css';

const Order = () =>{
    return(
        <div className={styles.cardContainer}>
            <div></div>
            <div className={styles.items}>
                <div className={styles.itemImg}>
                    <Image src="/static/icons/logout.svg" alt="User Dashbourd"
                      width={18} height={18}/>
                </div>
            </div>
        </div>
    );
};
export default Order;