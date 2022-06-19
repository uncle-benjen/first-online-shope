import styles from "../styles/Success.module.css"

const Success = (props)=>{
    return(
            <div className={styles.card}>
                <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
                    <i className={styles.checkmark}>✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
            </div>

    );
};

export default Success;