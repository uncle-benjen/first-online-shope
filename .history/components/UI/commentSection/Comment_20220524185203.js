import styles from "./Comment.module.css";
import Image from "next/image";

const Comment = (props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.name}>
                    <span>{props.date}</span>
                    <span>امین پورمحمدیان</span>
                </div>
                <div className={styles.title}>
                    <strong>پیشنهاد میشه</strong>
                    <div className={styles.offNum}> <p>4.5</p></div>
                </div>
                <div className={styles.subTitle}>
                ه نظرمن دستگاه خوبی برای ماارسال نشده بودویک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمود...بنده ازتمامی عوامل دیجی کالا به خاطرخدمات پس ازفروش بسیارخوبشون سپاسگزارم...
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