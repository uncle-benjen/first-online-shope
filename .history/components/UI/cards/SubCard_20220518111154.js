import styles from "./SubCard.module.css";
import Image from "next/image";

const SubCard = (props) =>{
    // console.log(props);
    return(
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <Image src="/static/img/shirt.png" alt="User Dashbourd"
                    width={92} height={92}/>
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