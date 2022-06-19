import styles from "./Address.module.css";
import Image from "next/image";

const Address = ({email, phone, address, city}) =>{

    return(
        <div className={styles.addressWrapper}>
            <div className={styles.address}>
                <p>{address}</p>
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