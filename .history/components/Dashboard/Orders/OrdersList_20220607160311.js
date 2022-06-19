import Order from "./Order";
import styles from "./OrdersList.module.css";
import { allItems } from "../../../lib/Items";

const OrdersList = (props) =>{

console.log(props.user.lastOrdersId);    
const orderItems = allItems.filter(item => user.currentOrdersId.includes(item.id))
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
                        {/* <Order /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrdersList;