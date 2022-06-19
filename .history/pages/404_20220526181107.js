import NotFoundPage from '../components/notFound/NotFoundPage';
import styles from '../styles/Home.module.css'


const NotFound = () =>{
    return(
        <div className={styles.notFoundWrapper}>
            <NotFoundPage  title={"Oops..! 404 Page Not Found"} subTitle={"Looks like you came to wrong page on our server"} imgUrl={"/static/img/emptycart.png"}/>
        </div>
    );
}

export default NotFound;