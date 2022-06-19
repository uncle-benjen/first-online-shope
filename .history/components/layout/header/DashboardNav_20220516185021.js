
import styles from "./DashboardNav.module.css";

const DashboardNav = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.profile}> profile</div>
            <div className={styles.navWrapper}>Navi</div>
            <div className={styles.footer}> footer</div>
        </div>
    );
};

export default DashboardNav;