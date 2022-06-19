import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import cls from "classnames";
import {magic} from "../lib/magicClient";
const Login =() =>{
   const router = useRouter();
   const [userMsg, setUserMsg] = useState("");
   const [email,setEmail] = useState();
   const [isValid, setIsValid] = useState(true);
   const [user, setUser] =useState();

   const emailChangeHandler = (e) =>{
      e.preventDefault();
      setIsValid(true)
      setUserMsg("");
      setEmail(e.target.value);
     
   };

   
   const loginHandler = async (e) =>{
      e.preventDefault();
      if (email) {
            try {
               const didToken = await magic.auth.loginWithMagicLink({email});
               const isLoggedIn = await magic.user.isLoggedIn();

               if (didToken) {
                 router.push("/");
               }
             } catch (error) {
               console.log("smthing went wrong", error);
             }
      }  
      else{
         setUserMsg("فیلد ایمیل را پر کنید");
         setIsValid(false);

      }
   };


   return(
   <div className={styles.container}>
      <div className={styles.header}>
         <h1>Sven</h1>
      </div>
      <div className={styles.formWrapper}>
         <form className={styles.form}>
            <h1>ورود یا ثبت نام</h1>
               <input type="email" name="email" id="email" placeholder="ایمیل" 
               className={cls(( isValid === false ? styles.inValid : ""))}
               onChange={emailChangeHandler}/>
               <p className={styles.userMsg}>{userMsg}</p>
            <button onClick={loginHandler} className={styles.loginBtn}>
               ورود
            </button>
         </form>
      </div>
   </div>
   );
   
};

export default Login;