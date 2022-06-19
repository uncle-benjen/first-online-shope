import styles from "./NotFound.module.css";
import Image from "next/image";
const NotFoundPage = (props) =>{
    const {title, subTitle, imgUrl} = props;
    return(
        <div className={styles.pageNotFound}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Image src={imgUrl} height="450" width="450" alt="not found"/>
            {/* <img  /> */}
        </div>
    );
}

export default NotFoundPage;