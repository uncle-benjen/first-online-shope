import Address from "./Address";
import styles from "./AddressList.module.css";

const AddressList = () =>{
    return(
        <div className={styles.addressWrapper}>
            <div className={styles.addressContainer}>
                <div className={styles.title}>
                    <h4>آدرس ها</h4>
                </div>
                <div className={styles.addressList}>
                    <div className={styles.address}>
                    </div>
                    <Address />
                    <Address />
                </div>
            </div>
        </div>
    );
}

export default AddressList;