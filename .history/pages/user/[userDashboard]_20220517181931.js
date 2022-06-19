import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";

const UserDashboard = () =>{

    return(
        <div className={styles.wrapper}>
            <div className={styles.nav}> <DashboardNav /> </div>
            .
            <Overview />
        </div>
    );
};

export default UserDashboard;