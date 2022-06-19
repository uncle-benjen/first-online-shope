import styles from "./NotFound.module.css";
const NotFoundPage = (props) =>{
    const {title, subTitle, imgUrl} = props;
    return(
        <div className={styles.pageNotFound}>
            <h1>Oops..! 404 Page Not Found</h1>
            <p>Looks like you came to wrong page on our server</p>
            <img src={imgUrl} height="500" width="500" alt="not found" />
        </div>
    );
}

export default NotFoundPage;