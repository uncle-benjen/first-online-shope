import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";
import AddressList from "../../components/Dashboard/address/AddressList";
import UserInfo from "../../components/Dashboard/userInfo/UserInfo";
import {useState} from "react";
import cls from "classnames";
import { users } from "../../lib/user.js";
import { magic } from "../../lib/magicClient";
import { userEmail } from "../login";
import { createUserName } from "../../components/layout/header/Header";

const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    const [active, setActive] = useState();
    const [user, setUser] = useState();
    const userDataArray =[{email: "", userName :"", imgSrc:""}];
    const [userData, setUserData] = useState(userDataArray);
    const navActive =(state) =>{
        setActive(state);
    };

  
    userEmail().then(res =>{
        setUser(users.find(user=>user.email === res));
        setUserData({...userData, email : res, userName : createUserName(res), imgSrc: user.imgSrc});
    });
    
    // console.log();
    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.nav, active && styles.active)}> 
                <DashboardNav navState={navActive} email={userData.email} userName={userData.userName} imgSrc={user.imgSrc}/> 
               
            </div>
            
            <div className={cls(styles.container, active && styles.active)}>
                {path === "dashboard" &&  <Overview  user = {user}/> } 
                {path === "orders" && <OrdersList />} 
                {path === "address" && <AddressList />} 
                {path === "info" && <UserInfo />} 
            </div>
        </div>
    );
}; 

export default UserDashboard;