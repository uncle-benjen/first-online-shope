import Order from "./Order";
import styles from "./OrdersList.module.css";

const OrdersList = () =>{

    
    return(
        <div className={styles.orderWrapper}>
            <div className={styles.orderContainer}>
                <div className={styles.title}>
                    <h4>تاریخچه سفارشات</h4>
                    <span>تحویل شده</span>
                </div>
                <div className={styles.orders}>
                    <div className={styles.order}>
                        <Order />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrdersList;