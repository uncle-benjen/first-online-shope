import styles from "./SubCard.module.css";

const SubCard = (props) =>{
    console.log(props.img);
    return(
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <img src={props.img} alt="item image"/>
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