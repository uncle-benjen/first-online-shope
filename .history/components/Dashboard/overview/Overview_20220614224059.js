import styles from "./Overview.module.css";
import Image from "next/image";
import SubCarousel from "../../UI/carousel/SubCarousel";
import { allItems } from "../../../lib/Items";
import {useState, useEffect} from "react";
import {getUserEmail} from "../../../pages/login";
const Overview = ({user}) =>{
    const userDataArray =[{currentNum : 2, deliverdNum : 5, returnedNum : 3}];
    const [userData, setUserData] = useState(userDataArray);
    const [foundItem, setFoundItem] =useState([]);
    // setTimeout(() => {
    //     }, 500);
    useEffect(()=>{
            setUserData({currentNum :user.currentOrdersId.length,
                deliverdNum : user.lastOrdersId.length, returnedNum : user.returnedNumber,});
                setFoundItem(allItems.filter(item => user.currentOrdersId.includes(item.id))); 
    },[])
        // console.log(foundItem);
    
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
                                    <span>{userData.currentNum}</span>
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
                                    <span>{userData.deliverdNum}</span>
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
                                    <span>{userData.returnedNum}</span>
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
                    <SubCarousel name="big" cards={foundItem}/>
                </div>
            </div>
            <div className={styles.olderOrders}> 
                <div className={styles.title}>
                    <h4>خرید های قبلی</h4>
                </div>
                <div className={styles.card}>
                    <SubCarousel name="big" cards={foundItem}/>
                </div>
            </div>
        </div>
    );
};

export default Overview;