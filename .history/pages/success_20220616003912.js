import styles from "../styles/Success.module.css"

const Success = (props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <i className={styles.checkmark}>✓</i>
                </div>
                <h1>Success</h1>
                <p>خرید شما با موفقیت انجام شد<br/><span> از خرید شما متشکریم</span></p>
                <a href="#"> <span>&larr;</span> صفحه اصلی</a>

            </div>
        </div>
    );
};

export default Success;