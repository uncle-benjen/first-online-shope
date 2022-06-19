import styles from "./Address.module.css";
const Address = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className={styles.container}>
                <div className={styles.addressList}>
                    <div className={styles.address}>
                        address
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;