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
    const [user1, setUser1] = useState();
    
        getUserEmail().then(res=>{
            // e.preventDefault();
            setUser1(users.find(user => user.email === res));
            // console.log(res);
        });

    const navActive =(state) =>{
        setActive(state);
    };

   
   
    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.nav, active && styles.active)}> 
                <DashboardNav navState={navActive} user={user1} /> 
               
            </div>
            
            <div className={cls(styles.container, active && styles.active)}>
                {path === "dashboard" &&  <Overview user={user1} /> } 
                {path === "orders" && <OrdersList user={user1} />} 
                {path === "address" && <AddressList user={user1} />} 
                {path === "info" && <UserInfo user={user1} />} 
            </div>
        </div>
    );
}; 

export default UserDashboard;

