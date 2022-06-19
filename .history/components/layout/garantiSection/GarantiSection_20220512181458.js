import styles from "./GarantiSection.module.css";
import Image from "next/image";

const GarantiSection = () =>{

    const arr = [
        {title : "امکان پرداخت در محل", imgSrc:"/static/img/pay.png"},
        {title : "پاسخگویی 24 ساعته", imgSrc:"/static/img/business.png"},
        {title : "ضمانت اصل بودن", imgSrc:"/static/img/badge.png"},
        {title : "امکان تحویل اکسپرس", imgSrc:"/static/img/delivery-truck.png"},
    ];
    return(
        <div className={styles.container}>
            {
                arr.map((item, index) =>{
                    return(
                        <div className={styles.content}>
                                <div className={styles.imgSection}>
                                <Image className={styles.icon}  src={item.imgSrc} alt="icon"
                                     width={60} height={60}/>
                                </div>
                                <div className={styles.textSection}>
                                    <h2>{item.title}</h2>
                                </div>
                        </div>
                    )
                })
            }
           
        </div>
    );
};

export default GarantiSection;