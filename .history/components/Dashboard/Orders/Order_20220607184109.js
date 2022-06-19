import Image from "next/image";
import styles from './Order.module.css';

const Order = ({date, price, items}) =>{

    // const img = props.items
    console.log(items);
    return(
        <div className={styles.cardContainer}>
            <div className={styles.orderDescription}>
                <div className={styles.state} >
                    <span>تحویل شده</span>
                  <Image src="/static/icons/tick-circle.svg" alt="Tick Icon"
                      width={18} height={18}/>
                </div>
                <div className={styles.info}>
                    <span className={styles.date}>{date}</span>
                    <div className={styles.price}>
                        <span>مبلغ سفارش</span> <span>{price}</span>
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                {
                    items.map((item,index)=>{
                        return(
                            <div className={styles.itemImg}>
                                <Image className={styles.img} src={item.imgSrc} alt="item Image"
                                layout="fill"/>
                            </div>
                        )
                    })
                }
              
            </div>
        </div>
    );
};
export default Order;