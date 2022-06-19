import Comment from "./Comment";
import styles from "./CommentSection.module.css";
import {useState} from "react";
const CommentSection = (props) =>{
    console.log(props.comments);
    const comments =
    [
        {url:"",name:"امین پورمحمدیان", data:"۴ مرداد ۱۳۹۹", title:"پیشنهاد میشه", rate:4, subTitle:"یک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمودبنده ازتمامی عوامل دیجی کالا به خاطرخدمات پسازفروش بسیارخوبشون سپاسگزارم."},
        {url:"",name:"امین پورمحمدیان", data:"۴ مرداد ۱۳۹۹", title:"پیشنهاد میشه", rate:4, subTitle:"یک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمودبنده ازتمامی عوامل دیجی کالا به خاطرخدمات پسازفروش بسیارخوبشون سپاسگزارم."},
        {url:"",name:"امین پورمحمدیان", data:"۴ مرداد ۱۳۹۹", title:"پیشنهاد میشه", rate:4, subTitle:"یک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمودبنده ازتمامی عوامل دیجی کالا به خاطرخدمات پسازفروش بسیارخوبشون سپاسگزارم."},
        {url:"",name:"امین پورمحمدیان", data:"۴ مرداد ۱۳۹۹", title:"پیشنهاد میشه", rate:4, subTitle:"یک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمودبنده ازتمامی عوامل دیجی کالا به خاطرخدمات پسازفروش بسیارخوبشون سپاسگزارم."},
        {url:"",name:"امین پورمحمدیان", data:"۴ مرداد ۱۳۹۹", title:"پیشنهاد میشه", rate:4, subTitle:"یک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمودبنده ازتمامی عوامل دیجی کالا به خاطرخدمات پسازفروش بسیارخوبشون سپاسگزارم."},
    ];
    const [itemNum, setItemNum] = useState(3);
    const [show, setShow] = useState(true)

    const showmoreHandler =(e)=>{
        e.preventDefault();
        setShow(!show);
        (itemNum >= comments.length ? setItemNum(itemNum - 3) : setItemNum(itemNum + 3) );
    };
    return(
        <div className={styles.container}>
            <h3>دیدگاه کاربران</h3>
            <div className={styles.wrapper}>
                <div className={styles.comment}>
                   {comments.slice(0 , itemNum).map((comment,index)=>{
                       return(
                         <Comment key={index}/>
                       );
                   })}
                   <button className={styles.btn} onClick={showmoreHandler}><span>&larr;</span>{show ? " بیشتر" : " بستن"}</button>
                </div>
            </div>

        </div>
    );
};

export default CommentSection;