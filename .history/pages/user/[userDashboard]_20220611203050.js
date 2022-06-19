import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";
import AddressList from "../../components/Dashboard/address/AddressList";
import UserInfo from "../../components/Dashboard/userInfo/UserInfo";
import {useState, useEffect} from "react";
import cls from "classnames";
import {getUserEmail} from "../../pages/login";
import { users } from "../../lib/user";
import Head from 'next/head';
import NotFoundPage from "../../components/notFound/NotFoundPage";



const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    const [active, setActive] = useState();
    const [user1, setUser1] = useState();
    
    useEffect(()=>{
        getUserEmail().then(res=>{
            if (res) {
                setUser1(users.find(user => user.email === res));
            }else{
                setUser1(users.find(user => user.email === "aliaminicr99@gmail.com"));
            }
        });
    }),[,user1];

   
    const navActive =(state) =>{
        setActive(state);
    };

   
    if (user1 === undefined) {
        getUserEmail().then(res=>{
            setUser1(users.find(user => user.email === res));
            console.log(res);
        });
        return(
            <NotFoundPage  title={"Oops..! 404 Page Not Found"} 
            subTitle={"Looks like you came to wrong page on our server"} 
            imgUrl={"/static/img/pagenotfound.jpg"}/>
        )
    }else{
        return(
            <div className={styles.wrapper}>
                 <Head>
                    <title>User Dashboard</title>
                    <meta name="Sven shop user dashboard" content="Generated by rApToR" />
                </Head>
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
    }
   
   
}; 

export default UserDashboard;
