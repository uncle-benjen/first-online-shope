import styles from "./SubCard.module.css";
import Image from "next/image";

const SubCard = (props) =>{
    // console.log(props);
    return(
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <div className={styles.imgWrapper}>
                    <Image className={styles.img} src="/static/img/shirt.png" alt="User Dashbourd"
                        layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className={styles.contentBx}>
                <div className={styles.price}>
                    <strong>$40</strong>
                    <span><s>$45</s></span>
                </div>
                <div className={styles.offNum}> <p>68%</p></div>
            </div>
        </div>
    );
};

export default SubCard;