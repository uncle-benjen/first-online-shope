import styles from "./Comment.module.css";
import Image from "next/image";

const Comment = (props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.name}>
                    <span>{props.date}</span>
                    <span>{props.userName}</span>
                </div>
                <div className={styles.title}>
                    <strong>{props.title}</strong>
                    <div className={styles.offNum}> <p>{props.rate}</p></div>
                </div>
                <div className={styles.subTitle}>
                    {props.subTitle}
                </div>
            </div>
            <div className={styles.prof}>
                <Image className={styles.profImg} src="/static/img/profile.jpg" alt="profile image"
                    width={100} height={100}/>
            </div>
        </div>
    );
}; 

export default Comment;