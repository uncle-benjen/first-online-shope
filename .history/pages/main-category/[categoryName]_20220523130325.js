import styles from '../../styles/Home.module.css'

import { useRouter} from "next/router";
import { useState , useEffect } from "react";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';
import { menSectionShow, womenSectionShow, kidSectionShow} from '../../lib/Items';
const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    // const cards =
    // [
    //     {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"/static/img/shirt.png"},
    //     {title: "second carousel", subTitle: "this is goal slide for this carousel... ", img:"/static/img/shirt.png", category:"menTshirt"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    // ];



    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menSection.jpg"},
    ];
    
    
    const cards = [];
    if (name === "men") {
        cards = menSectionShow;
    }else if (name === "women") {
        cards = womenSectionShow;
    }else if (name === "kids") {
        cards = kidSectionShow;
    }

    const [showCards, setShowCards] = useState(cards);

    const ment1 = [];
    const ment2 = [];
    const ment3 = [];
    cards.filter((item, index)=>{
        if (item.category.includes("t1")) {
            ment1.push(item);
        }
        if (item.category.includes("t2")) {
            ment2.push(item);
        }
        if (item.category.includes("t3")) {
            ment3.push(item);
        }
    })

    // const showCards = [...cards];
    useEffect(()=>{
        setShowCards(cards);
    },[name]);


    const t1Cards = [];
    const t2Cards = [];
    const t3Cards = [];
    const categoryClickHandler = (itemName, e)=> {
        e.preventDefault();
        if (itemName === "تیشرت") {
            setShowCards(ment1);
        }else if (itemName === "پیراهن") {
            setShowCards(ment2);
        }else if (itemName === "زمستانی") {
            setShowCards(ment3);
        }
    };


    return(
        <div className={styles.mainCategory}>
            <SubCategory type={category} clickHandler={categoryClickHandler}/>
            <CardSection title={name} cards={showCards ? showCards : cards}/>
        </div>
        );

};

export default CategoryName;