import styles from "./DashboardNav.module.css";
import Image from "next/image";
const DashboardNav = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.profileWrapper}>
                    <span className={styles.userName}>uncleBenjen</span>
                    <div className={styles.imgSection}>
                        <Image className={styles.img} src="/static/img/profile.jpg"  alt="Expand dropdown"
                            width={80} height={80}/>
                    </div>
                </div>
                <div className={styles.navWrapper}>Navi</div>
                <div className={styles.logoutWrapper}> footer</div>
            </div>
        </div>
    );
};

export default DashboardNav;