import NotFoundPage from '../components/notFound/NotFoundPage';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Fragment } from "react";

const NotFound = () =>{
    return(
        <div className={styles.notFoundWrapper}>
             <Head>
                <title>Not Found</title>
                <meta name="not found" content="Generated by rApToR" />
            </Head>
            <NotFoundPage  title={"Oops..! 404 Page Not Found"} 
                subTitle={"Looks like you came to wrong page on our server"} 
                imgUrl={"/static/img/pagenotfound.jpg"}/>
        </div>
    );
}

export default NotFound;