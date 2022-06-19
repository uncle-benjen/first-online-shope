import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";

const UserDashboard = () =>{
    const router = useRouter();
    return(
        <div className={styles.wrapper}>
            <div className={styles.nav}> <DashboardNav /> </div>
            <div className={styles.container}> <Overview /> </div>
            
        </div>
    );
};

export default UserDashboard;