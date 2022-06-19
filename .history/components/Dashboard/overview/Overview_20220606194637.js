import styles from "./Overview.module.css";
import Image from "next/image";
import SubCarousel from "../../UI/carousel/SubCarousel";
import { allItems } from "../../../lib/Items";
const Overview = (props) =>{

    const currentNum = props.user.currentOrdersId.length;
    const deliverdNum = props.user.lastOrdersId.length;
    
    // console.log();
    // const {returnedNumber, currentNum, deliverdNum, items } = props.userItems;
    const found = allItems.find(item => item.id === props.user.currentOrdersId);
    const cards =
    [
        {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"./static/img/shirt.png"},
        {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is four slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is five slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is six slide for this carousel... ", img:"./static/img/shirt.png"},
    ];
    return(
        <div className={styles.container}>
            <div className={styles.orderReview}> 
                <div className={styles.title}>
                    <h4>سفارش های من</h4>
                </div>
                    <ul className={styles.listItems}>
                        <li className={styles.listItem}>
                            <div className={styles.iconSection}>
                                    <Image src="/static/img/current.png" alt="User Dashbourd"
                                        layout="fill" objectFit="contain"/>
                            </div>
                            <div className={styles.text}>
                                <div>
                                    <span>{currentNum}</span>
                                    <span>سفارش</span>
                                </div>
                                <span className={styles.orderState}>جاری</span>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.iconSection}>
                                <Image src="/static/img/delivered.png" alt="User Dashbourd"
                                     layout="fill" objectFit="contain"/>
                            </div>
                            <div className={styles.text}>
                                <div>
                                    <span>{deliverdNum}</span>
                                    <span>سفارش</span>
                                </div>
                                <span className={styles.orderState}>تحویل شده</span>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.iconSection}>
                                <Image src="/static/img/returned.png" alt="User Dashbourd"
                                    layout="fill" objectFit="contain"/>
                            </div>
                            <div className={styles.text}>
                                <div>
                                    <span>{props.user.returnedNumber}</span>
                                    <span>سفارش</span>
                                </div>
                                <span className={styles.orderState}>مرجوع شده</span>
                            </div>
                        </li>
                    </ul>
            </div>
            <div className={styles.currentOrders}>
                <div className={styles.title}>
                    <h4>خرید های موجود</h4>
                </div>
                <div className={styles.card}>
                    <SubCarousel name="big" cards={cards}/>
                </div>
            </div>
            <div className={styles.olderOrders}> 
                <div className={styles.title}>
                    <h4>خرید های قبلی</h4>
                </div>
                <div className={styles.card}>
                    <SubCarousel name="big" cards={cards}/>
                </div>
            </div>
        </div>
    );
};

export default Overview;