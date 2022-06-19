import styles from "./Address.module.css";
import Image from "next/image";

const Address = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className={styles.address}>
                <p>شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳</p>
                    <div className={styles.userInfo}>
                        <span className={styles.city}>مراغه</span>
                        <div className={styles.icon}>
                            <Image  src="/static/icons/location.svg" alt="location icon"
                                layout="fill"/>
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                                <span>+989142544589</span>
                                <div className={styles.icon}>

                                    <Image  src="/static/icons/call.svg" alt="phone icon"
                                        layout="fill"/>
                                </div>
                    </div>
                    <div className={styles.userInfo}>
                                <span>unclebenjenn@gmail.com</span>
                                <div className={styles.icon}>
                                    <Image  src="/static/icons/user.svg" alt="user icon"
                                        layout="fill"/>
                                </div>
                    </div>
            </div>
        </div>
    );
};

export default Address;