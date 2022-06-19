import styles from "./DashboardNav.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import cls from "classnames";
const DashboardNav = () =>{
    const [navActive, setNavActive] = useState(false);

    return(
        <div className={styles.wrapper}>
            
            <div className={cls(styles.container, navActive && styles.active)}>
            <div className={cls(styles.menuIcon, (navActive ? styles.active : styles.inactive) )} onClick={() => setNavActive(!navActive)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
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
                            <li className={styles.navItem}><Link href="/user/dashboard"><a>خلاصه فعالیت</a></Link></li>
                            <li className={styles.navItem}><Link href={`/user/orders`}><a>سفارشات </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/user/address`}><a>آدرس ها </a></Link> </li>
                            <li className={styles.navItem}><Link href={`/user/info`}><a>اطلاعات حساب کاربر</a></Link> </li>
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