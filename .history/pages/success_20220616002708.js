import styles from "../styles/Success.module.css"

const Success = (props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <i className={styles.checkmark}>✓</i>
                </div>
                <h1>خرید  شما با موفقیت انجام شد</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <a href="#"> <span>&larr;</span>مشاهده همه</a>

            </div>
        </div>
    );
};

export default Success;