import styles from "./Address.module.css";
import Image from "next/image";

const Address = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className={styles.address}>
                <p>شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳</p>
                <span className={styles.city}>مراغه</span>
                <div className={styles.phone}>
                            <span>(041)37666666</span>
                            <div className={styles.icon}>

                                <Image  src="/static/icons/call.svg" alt="phone icon"
                                    width="18px" height="18px"/>
                            </div>
                </div>
                <div className={styles.email}>
                            <span>unclebenjenn@gmail.com</span>
                            <div className={styles.icon}>
                                <Image  src="/static/icons/sms.svg" alt="Email icon"
                                    width="18px" height="18px"/>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Address;