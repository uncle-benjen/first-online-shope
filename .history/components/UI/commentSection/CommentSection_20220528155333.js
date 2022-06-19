import Comment from "./Comment";
import styles from "./CommentSection.module.css";
import {useState} from "react";
const CommentSection = (props) =>{
    console.log(props.comments);
    const comments = props.comments.comments;
    console.log(comments);
    const [itemNum, setItemNum] = useState(2);
    const [showBtn,setShowBtn] = useState(true);
    const [show, setShow] = useState(false)

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
                   {showBtn && <button className={styles.btn} onClick={showmoreHandler}><span>&larr;</span>{show ? " بیشتر" : " بستن"}</button>}
                   
                </div>
            </div>

        </div>
    );
};

export default CommentSection;