import styles from "./Overview.module.css";
import cls from "classnames";
import Image from "next/image";
import SwiperCarousel from "../carousel/SwiperCarousel";
import { useCart } from "react-use-cart";



const Overview = (props) =>{
    const { addItem } = useCart();
    const {availbleColors, availbleSize, property, commentNum, title, price, off, priceWithOff, imgs} = props.item;
    
    console.log(props.item);

    return(
        <>
                <div className={styles.container}>
                
                <div className={styles.detailWrapper}>
                    <div className={styles.itemName}>
                        <span>دیدگاه {commentNum}</span>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.itemCustomize}>
                        <div className={styles.siz}>
                            <select name="type" className={styles.dropdown}>
                                {availbleSize.map((size, index)=>{
                                    return(
                                        <option key={index} value={size}>{size}</option>
                                    );
                                })}
                            </select>
                            <label className={styles.label}>  اندازه</label>

                        </div>
                        <div className={styles.color}>
                            <div className={styles.radio}>

                                                    
                                <input type="radio" name="color" id="green" />
                                <label htmlFor="green"><span style={{background: `${availbleColors[0]}`}}></span></label>

                                <input type="radio" name="color" id="red" />
                                <label htmlFor="red"><span style={{background: `${availbleColors[1]}`}}></span></label>

                                <input type="radio" name="color" id="blue" />
                                <label htmlFor="blue"><span style={{background: `${availbleColors[2]}`}}></span></label>
                            </div>
                            <h3>رنگ</h3>



                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.price}>
                            <strong>${price}تومن</strong>
                            <span><s>{priceWithOff}تومن</s></span>
                        <div className={styles.offNum}> <p>{off}</p></div>
                        </div>
                        <div className={styles.info}>
                                <h3>ویژگی ها</h3>
                            <ul>
                                {property.map((p, index)=>(
                                    <li key={index}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.imgWrapper}>
                    <SwiperCarousel imgSrc={imgs}/>
                </div>

                <button className={styles.btn} onClick={props.add}>
                {/* <Image className={styles.buy} src="/static/icons/shopping-cart1.svg" alt="Buy icon"
                    width={24} height={24}  /> */}
                    <span>افزودن به سبد</span>
                </button>
            </div>
            :
            <p>Loading</p>
        
     </>
        
    );
}; 

export default Overview;