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
                    <div className={styles.title}>آستین</div>
                    <div className={styles.descrip}>کوتاه </div>
                </li>
                <li>
                    <div className={styles.title}>یقه</div>
                    <div className={styles.descrip}> گرد</div>
                </li>
                <li>
                    <div className={styles.title}>طرح</div>
                    <div className={styles.descrip}>ملانژ</div>
                </li>
                <li>
                    <div className={styles.title}>کشور تولید کننده</div>
                    <div className={styles.descrip}> ایران</div>
                </li>
                <li>
                    <div className={styles.title}>نگهداری</div>
                    <div className={styles.descrip}> با ماشین لباسشویی و در دمای حداکثر 30 درجه سانتی گراد شستشو شود.
با دمای متوسط اتوکشی شود. </div>
                </li>
           
            </ul>
            <button className={styles.btn} onClick={showmoreHandler}><span>&larr;</span>{show ? "مشاهده همه" : "مشاهده کلی"}</button>
        </div>
    );
};

export default Info;