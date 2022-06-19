import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";
import Address from "../../components/Dashboard/address/Address";

const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    return(
        <div className={styles.wrapper}>
            <div className={styles.nav}> 
                <DashboardNav /> 
               
            </div>
            
            <div className={styles.container}>
                {path === "dashboard" &&  <Overview /> } 
                {path === "orders" && <OrdersList />} 
                {path === "address" && <Address />} 
                {path === "orders" && <OrdersList />} 
            </div>
        </div>
    );
};

export default UserDashboard;