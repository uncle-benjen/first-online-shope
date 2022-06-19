import styles from "./Address.module.css";
const Address = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className="title">آدرس ها</div>
            <div className={styles.address}>
                <p>شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳</p>
            </div>
        </div>
    );
};

export default Address;