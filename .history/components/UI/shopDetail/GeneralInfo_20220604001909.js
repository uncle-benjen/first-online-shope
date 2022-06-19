import styles from "./GeneralInfo.module.css";
import Image from "next/image";


 
const GeneralInfo = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.shopImg}>
                <Image className={styles.img} src="/static/img/shop.png" alt="shop image"
                    width={400} height={390}/>
            </div>
            <div className={styles.shopInfo}>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <div className={styles.icon}>
                            <Image  src="/static/icons/shop.svg" alt="shop icon"
                                width="24px" height="24px"/>
                        </div>
                        <h1>اطلاعت اسون</h1>
                    </div>
                    <div className={styles.title}>
                        <h4>دفتر مرکزی</h4>
                        <div className={styles.locIcon}>
                            <Image  src="/static/icons/location.svg" alt="Location icon"
                                width="32px" height="32px"/>
                        </div>
                    </div>
                    <p>استان تهران شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸</p>
                    
                    <div className={styles.phone}>
                            <span>(041)37666666</span>
                            <span>تلفن تماس</span>
                            <div className={styles.icon}>
                                <Image  src="/static/icons/call.svg" alt="phone icon"
                                    width="18px" height="18px"/>
                            </div>
                    </div>
                    <div className={styles.email}>
                            <span>unclebenjenn@gmail.com</span>
                            <span> ایمیل</span>
                            <div className={styles.icon}>

                                <Image  src="/static/icons/sms.svg" alt="Email icon"
                                    width="18px" height="18px"/>
                            </div>
                    </div>

                </div>
                <div className={styles.brief}>
                    <h4> خدمات پس از فروش</h4>
                    <p>
                        لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش دیجی‌کالا
                        از طریق پست، تنها به صندوق پستی 3469-15875 ارسال کنید.(شما می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید)                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GeneralInfo;