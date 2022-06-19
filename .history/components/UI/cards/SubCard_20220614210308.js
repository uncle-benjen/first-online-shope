import styles from "./SubCard.module.css";
import Image from "next/image";

const SubCard = (props) =>{
    // console.log(props);
    return(
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <div className={styles.imgWrapper}>
                    <Image className={styles.img} src={props.cards.imgSrc} alt="User Dashbourd"
                        layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className={styles.contentBx}>
                <div className={styles.price}>
                    <strong>${props.cards.priceWithOff}</strong>
                    <span><s>${props.cards.price}</s></span>
                </div>
                <div className={styles.offNum}> <p>{props.cards.off}%</p></div>
            </div>
        </div>
    );
};

export default SubCard;