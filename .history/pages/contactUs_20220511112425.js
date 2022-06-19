import FormSection from "../components/UI/shopDetail/FormSection";
import GeneralInfo from "../components/UI/shopDetail/GeneralInfo";
import Map from "../components/UI/shopDetail/Map";
import styles from '../styles/Home.module.css'

const ContactUs = () =>{
    return(
        <div className={styles.shopContainer}>
             <GeneralInfo />
             <Map />
             <FormSection />
        </div>
    );
};
export default ContactUs;