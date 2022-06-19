import SubCarousel from "../carousel/SubCarousel";
import styles from "./OfferSection.module.css"

const OfferSection = () =>{

    const cards =
    [
        {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"./static/img/shirt.png"},
        {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is four slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is five slide for this carousel... ", img:"./static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is six slide for this carousel... ", img:"./static/img/shirt.png"},
    ];
    return(
        <div className={styles.offer}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <SubCarousel name="big" cards={cards}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <p>پیشنهاد</p>
                        <p className={styles.space}>شگفت</p>
                        <p>انگیز</p>
                    </div>
                    <div className={styles.imgSection}>
                        <div className={styles.imgWrapper}>
                        <Image src="static/img/off.png" alt="Off"
                            width={18} height={18}/>
                        </div>
                        <div className={styles.imgWrapper}>
                        <Image src="static/img/search.png" alt="Off"
                            width={18} height={18}/>
                        </div>
                       
                    </div>
                    <a href="#"> <span>&larr;</span>مشاهده همه</a>
                </div>
            </div>

        </div>
    );
};

export default OfferSection;