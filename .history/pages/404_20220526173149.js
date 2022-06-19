import NotFoundPage from '../components/notFound/NotFoundPage';
import styles from '../styles/Home.module.css'


const NotFound = () =>{
    return(
        <div className={styles.notFoundWrapper}>
            {/* <div className={styles.notFoundContainer}> */}
                <NotFoundPage />
            {/* </div> */}
        </div>
    );
}

export default NotFound;