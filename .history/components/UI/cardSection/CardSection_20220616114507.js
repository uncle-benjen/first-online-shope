import styles from "./CardSection.module.css";
import MainCard from "../cards/MainCard";
import { useCart } from "react-use-cart";
import NotFoundPage from "../../notFound/NotFoundPage";
const CardSection = (props) =>{
        
        const { addItem } = useCart();
     const cards = props.cards.filter((card. index)=>{});
    if ( props.cards.length === 0 ) {
        return(
            <div className={styles.container}>   
                <div className={styles.wrapper}>
                    <NotFoundPage title={"محصولی در این دسته موجود نمی باشد"} subTitle={""} imgUrl={"/static/img/emptycart.png"}/>
                </div>
            <div></div>
        </div>
        );
    }else{
        return(
        <div className={styles.container}>   
            <div className={styles.wrapper}>
                        {props.cards.map((card, index) => {
                            return (
                                <div className={styles.cardWrapper} key={index}>
                                    <MainCard cardDetail={card} itemId={index} add={()=>addItem(card)}/> 
                                </div>  
                                );
                        })}
            </div>
            <div></div>
        </div>
        );
    }

};

export default CardSection;