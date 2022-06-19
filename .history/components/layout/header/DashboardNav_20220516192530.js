import styles from "./DashboardNav.module.css";
import Image from "next/image";
const DashboardNav = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.profileWrapper}>
                    <div className={styles.imgSection}>
                        <Image src="/static/img/profile.jpg"  alt="Expand dropdown"
                            width={70} height={70}/>
                    </div>
                    <span className={styles.userName}>UserName</span>
                </div>
                <div className={styles.navWrapper}>Navi</div>
                <div className={styles.logoutWrapper}> footer</div>
            </div>
        </div>
    );
};

export default DashboardNav;