import Order from "./Order";
import styles from "./OrdersList.module.css";
import { userOrders  } from "../../../lib/user";
import { allItems } from "../../../lib/Items";

const OrdersList = (props) =>{

    // const found = allItems.filter(item=>{userOrders.itemsId.includes(item.id)});
    // console.log(found);
    return(
        <div className={styles.orderWrapper}>
            <div className={styles.orderContainer}>
                <div className={styles.title}>
                    <h4>تاریخچه سفارشات</h4>
                    <span>تحویل شده</span>
                </div>
                <div className={styles.orders}>
                    {
                        userOrders.map((userOrder, index)=>{
                            
                            const found = allItems.filter(item=>{userOrder.itemsId.includes(item.id)});
                            console.log(allItems);
                        })
                    }
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