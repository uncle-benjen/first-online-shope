import styles from './SubCarousel.module.css';
import SmallCard from '../cards/SmallCard';
import Image from 'next/image';
import { useState } from 'react';
import SubCard from '../cards/SubCard';
const SubCarousel = (props) =>{
    //STATIC DATA
    // const cards =
    // [
    //     {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"./static/img/shirt.png"},
    //     {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is four slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is five slide for this carousel... ", img:"./static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is six slide for this carousel... ", img:"./static/img/shirt.png"},
    // ];
    // console.log(props.cards);
    const cards = props.cards;
    console.log(props.offerCards);

    const [x, setX]= useState(0);               //  Amount of transforming the element
    const [curr, setCurr]= useState(0);         // Current slide 
   
    const goLeft =()=>{
        (x === 0 ? setX(-(cards.length - 2)) : setX(x + 1));
        (curr === 0 ? setCurr(0) : setCurr(curr - 1));
        
    };
    const goRight = () =>{
        // (x === -27.5 * (cards.length)  ? setX(0) : setX(x - 27.5));
        (x === -(cards.length - 2) ? setX(0) : setX(x - 1));
        (curr === 4  ? setCurr(0) : setCurr(curr + 1));
    };
    
    const subGoLeft = () =>{
        // (x === 0  ? setX(-100 * (cards.length - 4)) : setX(x + 100));
        // (x === 0 ? setX(-(cards.length - 2)) : setX(x + 1));
        ( x === 0 ? setX( -100 * (props.cards.length-1)) : setX(x + 100) );


    };
    const subGoRight = () =>{
        // (x === -100 * (cards.length - 4)  ? setX(0) : setX(x - 100));
        // (x === -(cards.length - 2) ? setX(0) : setX(x - 1));
        ( x === -100 * (props.cards.length -1) ? setX(0) : setX(x - 100) );


    };


    // Carousel for small cards
    const smallCard = 
    <div className={styles.slider}>
        <div className={styles.slide}>
            {}
            {props.cards.map((card,index)=>{
                return(
                    <div key={index} className={styles.card} style={{transform:`translateX(${x * 100}%)`}}>
                        <SmallCard cards={card}/>
                    </div>
                    
                    )
                })}
        </div>

        <button onClick={goLeft}  className={styles.left} >
            <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/static/icons/arrow-left-1.svg" alt="leftArrow icon"
                    layout='fill' objectFit='cover'/>
            </div>
        </button>
        <button onClick={goRight}  className={styles.right}>
            <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/static/icons/arrow-right-1.svg" alt="righttArrow icon"
                    layout='fill' objectFit='cover'/>
            </div>
        </button>


           
            <div className={styles.dotsContainer}>
                    {Array.from({length:2}).map((dot, index)=>{
                        const dots = 
                        <div key={index}  className={styles.dots} ></div>;
                        
                        const active = 
                        <div key={index}  className={styles.active} ></div>;
                        const slide = (curr <= 2 ? 0 : 1);
                        return(
                            (slide === index ?  active : dots)
                        );
                    })}
            </div>
    </div>
;


// Carousel for subcards
    const subCard =  
    <div className={styles.slider}>
        <div className={styles.slide}>
            {}
            {props.cards.map((card,index)=>{
                return(
                    <div key={index} className={styles.sCard} style={{transform:`translateX(${x}%)`}}>
                        <SubCard card={card} />
                    </div>
                    
                    )
                })}
        </div>
        <button onClick={subGoLeft}  className={styles.sleft} >
            <Image className={styles.icon} src="/static/icons/arrow-left-1.svg" alt="leftArrow icon"
                width={40} height={40}/></button>
        <button onClick={subGoRight}  className={styles.sright}>
            <Image className={styles.icon} src="/static/icons/arrow-right-1.svg" alt="rightArrow icon"
                width={40} height={40}/></button>

    </div>;
   

return(
        (props.name == "small" ? smallCard : subCard)    
    );
   
};

export default SubCarousel;