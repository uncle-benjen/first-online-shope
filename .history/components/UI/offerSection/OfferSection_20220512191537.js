import SubCarousel from "../carousel/SubCarousel";
import styles from "./OfferSection.module.css"

const OfferSection = () =>{
    return(
        <div className={styles.offer}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <SubCarousel name="big"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <p>پیشنهاد</p>
                        <p className={styles.space}>شگفت</p>
                        <p>انگیز</p>
                    </div>
                    <div className={styles.imgSection}>
                        <img className={styles.img1} src="static/img/off.png" alt="Off" />
                        <img className={styles.img2} src="static/img/search.png" alt="Off" />
                    </div>
                    <a href="#"> <span>&larr;</span>مشاهده همه</a>
                </div>
            </div>

        </div>
    );
};

export default OfferSection;