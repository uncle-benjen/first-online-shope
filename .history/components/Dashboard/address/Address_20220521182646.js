import styles from "./Address.module.css";
import Image from "next/image";

const Address = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className="title">آدرس ها</div>
            <div className={styles.address}>
                <span>شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳</span>
                <span>مراغه</span>
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