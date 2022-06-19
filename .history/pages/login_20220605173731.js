import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import cls from "classnames";
import {magic} from "../lib/magicClient";
const Login =() =>{
   const router = useRouter();
   const [userMsg, setUserMsg] = useState("");
   // const [email,setEmail] = useState();
   const [isValid, setIsValid] = useState(true);

   const emailChangeHandler = (e) =>{
      e.preventDefault();
      setIsValid(true)
      setUserMsg("");
      // setEmail(e.target.value);
     
   };

   const handleLogin = async e => {

      e.preventDefault();
    
      const email = new FormData(e.target).get('email');
    
      const redirectURI = `${window.location.origin}/callback`; // 👈 This will be our callback URI
    
      if (email) {
    
        /* One-liner login 🤯 */
    
        await magic.auth.loginWithMagicLink({ email, redirectURI }); // 👈 Notice the additional parameter!
    
        render();
    
      }
    
    };

   const loginHandler = async (e) =>{
      e.preventDefault();
      // let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (email) {
         // if (pattern.test(email)) {
         //    console.log(email);
            try {
               const didToken = await magic.auth.loginWithMagicLink({email});
               const isLoggedIn = await magic.user.isLoggedIn();

               if (didToken && isLoggedIn) {
                 router.push("/");
               }
             } catch (error) {
               console.log("smthing went wrong", error);
             }
            // if (email === "aliaminicr99@gmail.com") {
               
            // }else{
            //    console.log("yaftNashod");
            //    setUserMsg("کاربری با این ایمیل یافت نشد");
            //    setIsValid(false);
            // }
         // }
         // else{
         //    setUserMsg("ایمیل را بصورت صحیح وارد کنید");
         //    setIsValid(false);
         // }
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
            <button onClick={handleLogin}
               className={styles.loginBtn}
               // disabled={isLoading ? true : false}
               >
               {/* {isLoading ? "Loading..." : "Sign In"} */}
               ورود
            </button>
         </form>
      </div>
   </div>
   );
   
};
export default Login;