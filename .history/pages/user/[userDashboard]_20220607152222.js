import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";
import AddressList from "../../components/Dashboard/address/AddressList";
import UserInfo from "../../components/Dashboard/userInfo/UserInfo";
import {useState} from "react";
import cls from "classnames";
import {getUserEmail} from "../../pages/login";
import { users } from "../../lib/user";;


const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    const [active, setActive] = useState();
    const [user, setUser] = useState();
    setTimeout(() => {
        getUserEmail().then(res=>{
            setUser(users.find(user => user.email === res));
            console.log(user);
            });
        }, 2000);


    const navActive =(state) =>{
        setActive(state);
    };

   
   
    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.nav, active && styles.active)}> 
                <DashboardNav navState={navActive} /> 
               
            </div>
            
            <div className={cls(styles.container, active && styles.active)}>
                {path === "dashboard" &&  <Overview user={user} /> } 
                {path === "orders" && <OrdersList />} 
                {path === "address" && <AddressList />} 
                {path === "info" && <UserInfo />} 
            </div>
        </div>
    );
}; 

export default UserDashboard;

