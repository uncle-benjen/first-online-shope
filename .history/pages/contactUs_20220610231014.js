import FormSection from "../components/UI/shopDetail/FormSection";
import GeneralInfo from "../components/UI/shopDetail/GeneralInfo";
import Map from "../components/UI/shopDetail/Map";
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const ContactUs = () =>{
    return(
        <div className={styles.shopContainer}>
            <Head>
                <title>Contact Us</title>
                <meta name="contact with Sven shop" content="Generated by rApToR" />
            </Head>
             <GeneralInfo />
             <Map />
             <FormSection />
        </div>
    );
};
export default ContactUs;