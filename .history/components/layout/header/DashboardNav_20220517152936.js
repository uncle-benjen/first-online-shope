import styles from "./DashboardNav.module.css";
import Image from "next/image";
import Link from "next/link";

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
                    {/* <div className={styles.nav}> */}
                        <ul className={styles.navItems}>
                            <li className={styles.navItem}><Link href="/">صفحه اصلی </Link></li>
                            <li className={styles.navItem}><Link href={`/`}><a>زنانه </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/`}><a>مردانه </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/`}><a>بچگانه </a></Link> </li>
                        </ul>
                    {/* </div> */}
                </div>
                <div className={styles.logoutWrapper}> 
                    <Link href="/"><a>خروج از داشبورد </a></Link>
                    <span>copy by 2018</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;