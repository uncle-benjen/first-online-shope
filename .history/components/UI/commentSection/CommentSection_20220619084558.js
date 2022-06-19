import Comment from "./Comment";
import styles from "./CommentSection.module.css";
import {useState} from "react";
const CommentSection = (props) =>{
    // console.log(props.comments);
    const {comments = [{userName:"امین پورمحمدیان", userImg:"/static/img/t-shirt2.png", date:"۴ مرداد ۱۳۹۹", rate:4.5, title:"پیشنهاد میشه",
    subTitle:"نظرمن دستگاه خوبی برای ماارسال نشده بودویک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمود...بنده ازتمامی عوامل دیجی کالا به خاطرخدمات پس ازفروش بسیارخوبشون سپاسگزارم"}] = props.comments.comments;
    // console.log(comments);
    const [itemNum, setItemNum] = useState(2);
    const [showBtn,setShowBtn] = useState(true);
    const [show, setShow] = useState(true)

    // (comments.length < 3 && setShowBtn(false))
    const showmoreHandler =(e)=>{
        e.preventDefault();
        setShow(!show);
       ( show ? setItemNum(comments.length) : setItemNum(2));
        // (itemNum >= comments.length -1 ? setItemNum(itemNum - ) : setItemNum(itemNum + 3) );
    };
    return(
        <div className={styles.container}>
            <h3>دیدگاه کاربران</h3>
            <div className={styles.wrapper}>
                <div className={styles.comment}>
                   {comments.slice(0 , itemNum).map((comment,index)=>{
                       return(
                         <Comment key={index}
                            userName={comment.userName}
                            title={comment.title}
                            subTitle={comment.subTitle}
                            userImg={comment.userImg}
                            date={comment.date}
                            rate={comment.rate}
                         />
                       );
                   })}
                   {comments.length >= 3 && <button className={styles.btn} onClick={showmoreHandler}><span>&larr;</span>{show ? " بیشتر" : " بستن"}</button> }
                   
                   
                </div>
            </div>

        </div>
    );
};

export default CommentSection;