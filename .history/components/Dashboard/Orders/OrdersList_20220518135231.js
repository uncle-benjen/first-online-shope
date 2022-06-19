import styles from "./OrdersList.module.css";

const OrdersList = () =>{
    return(
        <div className={styles.orderWrapper}>
            <div className={styles.orderContainer}>
                <div className={styles.title}>
                    <h4>تاریخچه سفارشات</h4>
                </div>
                <div className={styles.orders}>
                    <div className={styles.order}></div>
                </div>
            </div>
        </div>
    );
};
export default OrdersList;