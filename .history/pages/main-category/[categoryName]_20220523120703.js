import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';
import { menSectionShow, womenSectionShow, kidSectionShow } from '../../lib/Items';
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

    const cards = [];
    if (name === "men") {
        cards = menSectionShow;
    }else if (name === "women") {
        cards = womenSectionShow;
    }else if (name === "kids") {
        cards = kidSectionShow;
    }

//     const showCard = cards.filter((card,item)=>{
//     return(
//         (card.category ==="menTshirt" && card)
//     );
// });
// console.log(showCard);

    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menSection.jpg"},
    ];
    const showCards = [];
    // const temp = data;
    const categoryClickHandler = (itemName, e)=> {
        cards.map((card,index)=>{
               if (card.category.includes("t1")) {
                    showCards.push(card);
                    console.log(showCards);
               }else if (card.category.includes("t2")) {
                showCards.push(card);
               }else if (card.category.includes("t3")) {
                showCards.push(card);
               }
               return(
                   cards = showCards
               )
        
        });
    };


    return(
        <div className={styles.mainCategory}>
            <SubCategory type={category} clickHandler={categoryClickHandler}/>
            <CardSection title={name} cards={cards}/>
        </div>
        );

};

export default CategoryName;