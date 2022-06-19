import NotFoundPage from '../components/notFound/NotFoundPage';
import styles from '../styles/Home.module.css'


const NotFound = () =>{
    return(
        <div className={styles.notFoundWrapper}>
            <div className={styles.notFoundContainer}>
                {/* <h1>صفحه مورد نظر در دسترس نمیباشد</h1> */}
                <NotFoundPage />
            </div>
        </div>
    );
}

export default NotFound;