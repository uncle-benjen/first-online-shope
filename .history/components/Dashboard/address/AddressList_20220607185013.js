import Address from "./Address";
import styles from "./AddressList.module.css";

const AddressList = ({user}) =>{
    const {email, phone} = user;
    return(
        <div className={styles.addressWrapper}>
            <div className={styles.addressContainer}>
                <div className={styles.title}>
                    <h4>آدرس ها</h4>
                </div>
                <div className={styles.addressList}>
                    {user.addresses.map((user,index)=>{
                        return(
                            <div className={styles.address}>
                                <Address email phone address={user.address} city={user.city}/>
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
        </div>
    );
}

export default AddressList;