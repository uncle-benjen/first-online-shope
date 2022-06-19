import styles from "./MainCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic, loggedIn } from "../../../lib/magicClient";

const MainCard =(props)=>{
    const router = useRouter();
    const {id, title, subTitle, price, off, imgSrc, priceWithOff} = props.cardDetail;


    const detailPageHandler = async(e) =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        // const isLoggedIn = loggedIn();
        // console.log(isLoggedIn);
        // isLoggedIn ? router.push(`item/${id}`) : router.push(`/login`);
        router.push(`item/${id}`)
        // console.log("card",isLoggedIn);
        e.preventDefault();
    };


   
    return(
         
             <div className={styles.card}>
                    <div className={styles.imgBx} onClick={detailPageHandler}>
                        <img src={imgSrc} alt="item image" />
                    </div>
                    <div className={styles.contentBx} >
                        <div className={styles.cardInfo} onClick={detailPageHandler}>
                            <strong >{title}</strong>
                            <span>{subTitle}</span>
                        </div>
                        <div className={styles.cardPriceCTA}>
                            <span className={styles.price}>{price}</span>
                            <button className={styles.btn}>
                                <Image className={styles.buy} src="/static/icons/shopping-cart.svg" alt="shopping cart icon"
                                    width={30} height={30} onClick={props.add} loading="lazy"/>
                            </button>
                        </div>
                    </div>
                </div>
       
    );
};

export default MainCard;