import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';

const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"./static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"./static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"./static/img/menSection.jpg"},
    ];
    // const temp = data;

    return(
        <div className={styles.mainCategory}>
            <SubCategory />
            <CardSection title={name}/>
        </div>
        );

};

export default CategoryName;