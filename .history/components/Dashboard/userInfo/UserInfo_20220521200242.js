import styles from "./UserInfo.module.css";

const UserInfo = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.title}> نام نام خانوادگی</span>
                    <span className={styles.subTitle}> علی امینی</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;