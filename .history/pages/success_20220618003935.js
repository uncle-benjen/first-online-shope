import styles from "../styles/Success.module.css"
import Link from "next/link";
const Success = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <i className={styles.checkmark}>✓</i>
                </div>
                <div className={styles.textSection}>
                    <h1>موفق</h1>
                    <p>خرید شما با موفقیت انجام شد</p>
                    <br/>
                    <span className={styles.text}> از خرید شما متشکریم</span>
                </div>
                <Link href="/"> <a > <span>&larr;</span> صفحه اصلی</a></Link>
            </div>
        </div>
    );
};

export default Success;