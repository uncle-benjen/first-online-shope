import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";



const Footer = () =>{
    const router = useRouter();
    const url = router.query.categoryName;


    return(
        <footer className={styles.footer}>
            <div className= {styles.wrapper}>
                <div className={styles.logo}>
                    Sven
                </div>
                <div className={styles.menuSection}>
                    <div className={styles.leftMenu}>
                            <h2>اطلاعات</h2>
                            <ul className={styles.navItems}>

                                <li className={styles.item}>
                                    <span>(041)37666666</span>
                                    <div className={styles.icon}>
                                        <Image  src="/static/icons/call.svg" alt="phone icon"
                                            width="16px" height="16px"/>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <span>unclebenjenn@gmail.com</span>
                                    <div  className={styles.icon}>
                                        <Image src="/static/icons/sms.svg" alt="email icon"
                                            width="16px" height="16px"/>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <span>تهران، چهارراه ولیعصر، بازارکامپیوتررضا، واحد 24</span>
                                    <div className={styles.icon}>
                                        <Image  src="/static/icons/map.svg" alt="map icon"
                                            width="16px" height="16px"/>
                                    </div>
                                </li>
                               
                            </ul>
                    </div>
                    <div className={styles.rightMenu}>
                            <h2>خرید</h2>
                            <ul className={styles.navItems}>
                                <li className={styles.navItem}><Link href={`/main-category/${["men"]}`}><a>مردانه </a></Link> </li>
                                <li className={styles.navItem}><Link href={`/main-category/${["women"]}`}><a>زنانه </a></Link> </li>
                                <li className={styles.navItem}><Link href={`/main-category/${["kid"]}`}><a>بچگانه </a></Link> </li>
                                <li className={styles.navItem}><Link href="/contactUs"><a>ارتباط با ما </a></Link> </li>
                            </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;