import SubCarousel from "../carousel/SubCarousel";
import styles from "./SellSection.module.css";
import cls from "classnames";
const SellSection =(props) =>{     
    let style, imgSrc, label;

    if (props.type == "men") {
         style = "row-reverse";
         imgSrc = "/static/img/menSection.jpg";
         label = "لباس مردانه";
    }else if (props.type == "women") {
         style = "row";
         imgSrc = "/static/img/womenSection.jpg";
         label = "لباس زنانه";
    }

    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.container, (props.type == "men" && styles.men))} style={{flexDirection:`${style}`}} >
                <div className={styles.imgSection}>
                    <figure className={styles.figure}>
                        <img src={imgSrc} alt="Carousel img"/>
                        <figcaption className={styles.figcaption}>
                            {label}
                        </figcaption>
                    </figure>
                </div>
                <div className={styles.slider}> 
                  <SubCarousel name="small"/>
                </div>
            </div>
        </div>
    );
};

export default SellSection;