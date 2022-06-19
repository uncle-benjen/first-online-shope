import styles from "./DashboardNav.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import cls from "classnames";
import { useRouter } from "next/router";

const DashboardNav = (props) =>{
    const [navActive, setNavActive] = useState(false);
    const router = useRouter();
    const url = router.asPath;
console.log(props.user);

    props.navState(navActive);
    return(
        <div className={styles.dashboardWrapper}>
            
            <div className={cls(styles.container, navActive && styles.active)}>
                <div className={cls(styles.menuIcon, (navActive ? styles.active : styles.inactive) )} onClick={() => setNavActive(!navActive)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={cls(styles.wrapper, navActive && styles.active)}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imgSection}>
                            <Image className={styles.img} src="/static/img/tshirt.png"  alt="Expand dropdown"
                                width={90} height={90}/>
                        </div>
                        <span className={styles.userName}>awdwa</span>
                        <span className={styles.email}>email</span>
                    </div>
                    <div className={styles.navWrapper}>
                        {/* <div className={styles.nav}> */}
                            <ul className={styles.navItems}>
                                <li className={cls(styles.navItem, (url=="/user/dashboard" && styles.active) )}><Link href="/user/dashboard"><a>خلاصه فعالیت</a></Link></li>
                                <li className={cls(styles.navItem, (url=="/user/orders" && styles.active) )}><Link href={`/user/orders`}><a>سفارشات </a></Link> </li>
                                <li className={cls(styles.navItem, (url=="/user/address" && styles.active) )}><Link href={`/user/address`}><a>آدرس ها </a></Link> </li>
                                <li className={cls(styles.navItem, (url=="/user/info" && styles.active) )}><Link href={`/user/info`}><a>اطلاعات حساب کاربر</a></Link> </li>
                            </ul>
                        {/* </div> */}
                    </div>
                    <div className={styles.logoutWrapper}> 
                        <Link href="/"><a>خروج از داشبورد </a></Link>
                        <span>copy by 2018</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;