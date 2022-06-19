import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";

const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    return(
        <div className={styles.wrapper}>
            <div className={styles.nav}> 
                <div className={styles.navWrapper}>
                    <DashboardNav /> 
                </div>
               
            </div>
            
            <div className={styles.container}>
                {path === "dashboard" &&  <Overview /> } 
                {path === "orders" && <OrdersList />} 
            </div>
        </div>
    );
};

export default UserDashboard;