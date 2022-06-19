import styles from "./DashboardNav.module.css";
import Image from "next/image";
const DashboardNav = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.profileWrapper}>
                    <div className={styles.imgSection}>
                        <Image className={styles.img} src="/static/img/profile.jpg"  alt="Expand dropdown"
                            width={90} height={90}/>
                    </div>
                    <span className={styles.userName}>uncleBenjen</span>
                    <span className={styles.email}>uncleBenjen@gmail.com</span>
                </div>
                <div className={styles.navWrapper}>
                    <div className={styles.nav}>
                        <ul className={styles.navItems}>
                            <li className={styles.navItem}><Link href="/"><a>صفحه اصلی </a></Link></li>
                            <li className={styles.navItem}><Link href={`/main-category/${["women"]}`}><a>زنانه </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/main-category/${["men"]}`}><a>مردانه </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/main-category/${["kids"]}`}><a>بچگانه </a></Link> </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logoutWrapper}> footer</div>
            </div>
        </div>
    );
};

export default DashboardNav;