import styles from "./DashboardNav.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState ,useEffect} from "react";
import cls from "classnames";
import { useRouter } from "next/router";
import {createUserName} from "./Header";
const DashboardNav = (props) =>{
    const [navActive, setNavActive] = useState(false);
    const [userName, setUserName] = useState("aliaminicr99");
    const [email, setEmail] = useState("aliaminicr99@gmail.com");
    const [img, setImg] = useState("/static/img/profile.png");
    const router = useRouter();
    const url = router.asPath;
    // const img ="/static/img/profile.png", userName="dwad", email = "awd#gmail.com";
  useEffect(()=>{
      setUserName(createUserName(props.user.email));
      setEmail(props.user.email);

  },[, props])
    // const userName = "userawd";
   setImg(props.user.imgSrc); 
    
    // const img = "/props.user.imgSrc"; 

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
                            <Image className={styles.img} src={img}  alt="Expand dropdown"
                                width={90} height={90}/>
                        </div>
                        <span className={styles.userName}>{userName}</span>
                        <span className={styles.email}>{email}</span>
                    </div>
                    <div className={styles.navWrapper}>
                        {/* <div className={styles.nav}> */}
                            <ul className={styles.navItems}>
                                <li className={cls(styles.navItem, (url=="/user/dashboard" && styles.active) )}><Link href="/user/dashboard"><a>?????????? ????????????</a></Link></li>
                                <li className={cls(styles.navItem, (url=="/user/orders" && styles.active) )}><Link href={`/user/orders`}><a>?????????????? </a></Link> </li>
                                <li className={cls(styles.navItem, (url=="/user/address" && styles.active) )}><Link href={`/user/address`}><a>???????? ???? </a></Link> </li>
                                <li className={cls(styles.navItem, (url=="/user/info" && styles.active) )}><Link href={`/user/info`}><a>?????????????? ???????? ??????????</a></Link> </li>
                            </ul>
                        {/* </div> */}
                    </div>
                    <div className={styles.logoutWrapper}> 
                        <Link href="/"><a>???????? ???? ?????????????? </a></Link>
                        <span>copy by 2018</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;