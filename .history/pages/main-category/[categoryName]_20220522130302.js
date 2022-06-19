import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';

const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    const cards =
    [
        {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"/static/img/shirt.png"},
        {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"/static/img/shirt.png", category:"menTshirt"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    ];

    const showCard = cards.map((card,item)=>{
    return(
        (card.category ==="menTshirt" && card)
    );
});
console.log(showCard);

    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menSection.jpg"},
    ];
    // const temp = data;

    return(
        <div className={styles.mainCategory}>
            <SubCategory type={category}/>
            <CardSection title={name} cards={cards}/>
        </div>
        );

};

export default CategoryName;