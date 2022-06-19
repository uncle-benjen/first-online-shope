import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";

const UserDashboard = () =>{

    return(
        <div className={styles.container}>
            <DashboardNav />
        </div>
    );
};

export default UserDashboard;