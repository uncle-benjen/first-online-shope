import styles from "./MainCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic, loggedIn } from "../../../lib/magicClient";
import { menSectionShow } from "../../../lib/Items";

const MainCard =(props)=>{
    const router = useRouter();
    const imgurl = props.url;
    const id = props.itemId;


    const detailPageHandler = async(e) =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        // const isLoggedIn = loggedIn();
        console.log(isLoggedIn);
        isLoggedIn ? router.push(`item/${id}`) : router.push(`/login`);
        console.log("card",isLoggedIn);
        // e.preventDefault();
    };


    const addItem = (e) =>{
        e.preventDefault();
        console.log("111");
    };
    return(
        <div className={styles.card} onClick={detailPageHandler}>
                <div className={styles.imgBx} onClick={detailPageHandler}>
                    <img src={imgurl} alt="item image"/>
                </div>
                <div className={styles.contentBx} >
                    <div className={styles.cardInfo} onClick={detailPageHandler}>
                        <strong >پیراهن طرح دار</strong>
                        <span> فروش پراهن های باهری  در انواعیاث سیینعقاب</span>
                    </div>
                    <div className={styles.cardPriceCTA}>
                        <span className={styles.price}>{menSectionShow.price}</span>
                        <Image className={styles.buy} src="/static/icons/shopping-cart.svg" alt="shopping cart icon"
                            width={30} height={30} onClick={addItem}/>
                    </div>
                </div>
            </div>
    );
};

export default MainCard;