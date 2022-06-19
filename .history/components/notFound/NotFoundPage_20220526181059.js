import styles from "./NotFound.module.css";
const NotFoundPage = (props) =>{
    const {title, subTitle, imgUrl} = props;
    return(
        <div className={styles.pageNotFound}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <img src={imgUrl} height="500" width="500" alt="not found" />
        </div>
    );
}

export default NotFoundPage;