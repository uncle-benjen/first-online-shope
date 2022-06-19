import styles from "./UserInfo.module.css";

const UserInfo = () =>{
    return(
        <div className={styles.wrapepr}>
            <div className="content">
                <div className="info">
                    <span className={styles.title}> نام نام خانوادگی</span>
                    <span className={styles.subTitle}> علی امینی</span>
                </div>
            </div>
            <div className="content">
                <div className="info">
                    <span className={styles.title}> نام نام خانوادگی</span>
                    <span className={styles.subTitle}> علی امینی</span>
                </div>
            </div>
            <div className="content">
                <div className="info">
                    <span className={styles.title}> نام نام خانوادگی</span>
                    <span className={styles.subTitle}> علی امینی</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;