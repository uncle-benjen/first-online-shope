import NotFoundPage from '../components/notFound/NotFoundPage';
import styles from '../styles/Home.module.css'


const NotFound = () =>{
    return(
        <div className={styles.notFoundWrapper}>
            <NotFoundPage />
        </div>
    );
}

export default NotFound;