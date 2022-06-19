import styles from "./UserInfo.module.css";

const UserInfo = ({user}) =>{
    const {fullName, nationalCode, phone, email} =user;
    return(
        <div className={styles.wrapper}>
            <h4>اطلاعات کاربر</h4>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span className={styles.title}>  ایمیل </span>
                        <span className={styles.subTitle}>{email}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span className={styles.title}> نام نام خانوادگی</span>
                        <span className={styles.subTitle}> علی امینی</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span className={styles.title}> شماره تماس</span>
                        <span className={styles.subTitle}> 09145568738</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span className={styles.title}> کد ملی</span>
                        <span className={styles.subTitle}>155226584</span>
                    </div>
                </div>
            
            </div>
        </div>

    );
};

export default UserInfo;