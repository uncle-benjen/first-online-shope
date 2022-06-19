import styles from "./Info.module.css";
import {useState} from "react";
const Info = () =>{

    const [show, setShow] = useState(true)
 
    const showmoreHandler =(e)=>{
        e.preventDefault();
        setShow(!show);
    };

    return(
        <div className={styles.container}>
            <h3>مشخصات</h3>
            <ul className={show && styles.show}>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
                <li>
                    <div className={styles.title}>جنس</div>
                    <div className={styles.descrip}>پلی استر</div>
                </li>
           
            </ul>
            <button className={styles.btn} onClick={showmoreHandler}><span>&larr;</span>{show ? "مشاهده همه" : "مشاهده کلی"}</button>
        </div>
    );
};

export default Info;