import styles from "./CardSection.module.css";
import MainCard from "../cards/MainCard";
import Link from "next/link";
import SmallCard from "../cards/SmallCard";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const CardSection = (props) =>{
    const { addItem } = useCart();
  


    return(
    <div className={styles.container}>   
        {/* <h2 className={styles.title}></h2>  */}
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
};

export default CardSection;