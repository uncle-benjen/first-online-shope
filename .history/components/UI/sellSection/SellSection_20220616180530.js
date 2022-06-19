import SubCarousel from "../carousel/SubCarousel";
import styles from "./SellSection.module.css";
import cls from "classnames";
const SellSection =(props) =>{     
    let style, imgSrc, label;

    if (props.type == "men") {
        //  style = "row-reverse";
         imgSrc = "/static/img/menSection.jpg";
         label = "لباس مردانه";
    }else if (props.type == "women") {
        //  style = "row";
         imgSrc = "/static/img/womenSection.jpg";
         label = "لباس زنانه";
    }

    // const cards = props.cards;
    // const cards =
    // [
    //     {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"./static/img/shirt.png"},
    //     {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is four slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is five slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is six slide for this carousel... ", img:"./static/img/shirt.png"},
    // ];
    return(
        <div className={styles.wrapper}>
            <div className={cls(styles.container, (props.type == "men" && styles.men))}  >
                <div className={styles.imgSection}>
                    <figure className={styles.figure}>
                        <Image src={imgSrc} alt="Carousel img"/>
                        <img src={imgSrc} alt="Carousel img"/>
                        <figcaption className={styles.figcaption}>
                            {label}
                        </figcaption>
                    </figure>
                </div>
                <div className={styles.slider}> 
                  <SubCarousel name="small" cards={props.cards}/>
                </div>
            </div>
        </div>
    );
};

export default SellSection;