import styles from "./Overview.module.css";
import Image from "next/image";
import SubCarousel from "../../UI/carousel/SubCarousel";
import { allItems } from "../../../lib/Items";
import {useState} from "react";
import { createUserName } from "../../layout/header/Header";
import { users } from "../../../lib/user";
import {magic} from "../lib/magicClient";


const Overview = (props) =>{
    const userDataArray =[{email: "", userName :"", imgSrc:"",currentNum : 0, deliverdNum : 0}];
    const [userData, setUserData] = useState(userDataArray);
    const [user, setUser] = useState();

    
async function userEmail() {
    try {
       const { email } = await magic.user.getMetadata();
       console.log(email);
       return email;
    } catch (error) {
       console.log("Somthing went wrong", error);
    }
}
userEmail();
    //  console.log(userEmail());
    // userEmail().then(res =>{
    //     setUser(users.find(user=>user.email === res));
    //     setUserData({...userData, email : res, userName : createUserName(res), currentNum:user.currentOrdersId.length
    //         , deliverdNum: user.lastOrdersId.length});
    // });
// console.log(userData.currentNum);
    const currentNum = "props.user.currentOrdersId.length";
    const deliverdNum = "props.user.lastOrdersId.length";
    // console.log();
    // const found = allItems.filter(item => user.currentOrdersId.includes(item.id));
    const found =
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
                                    <span>2</span>
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
                    <SubCarousel name="big" cards={found}/>
                </div>
            </div>
            <div className={styles.olderOrders}> 
                <div className={styles.title}>
                    <h4>خرید های قبلی</h4>
                </div>
                <div className={styles.card}>
                    <SubCarousel name="big" cards={found}/>
                </div>
            </div>
        </div>
    );
};

export default Overview;