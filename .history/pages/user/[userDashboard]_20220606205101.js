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
import { useEffect } from "react";

const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    const [active, setActive] = useState();
    // const [user, setUser] = useState();
    const userDataArray =[{email: "", userName :"", imgSrc:""}];
    const [userData, setUserData] = useState(userDataArray);
    const user = [];
    const navActive =(state) =>{
        setActive(state);
    };

   
    // try {
    //     userEmail().then(res =>{
    //         // setUser(users.find(user=>user.email === res));
    //         user.push(users.find(user=>user.email === res));
    //         setUserData({...userData, email : res, userName : createUserName(res)});
    //     });
    // } catch (error) {
    //     console.log("fuuuuck", error);
    // }
    
    // setUser(a2);
    
    // console.log(user);
    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.nav, active && styles.active)}> 
                <DashboardNav navState={navActive} /> 
               
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