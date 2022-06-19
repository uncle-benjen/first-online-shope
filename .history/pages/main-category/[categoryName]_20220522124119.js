import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";
import MainCategory from '../../components/UI/mainCategory/MainCategory';
import CardSection from '../../components/UI/cardSection/CardSection';

const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"public/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"public/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"public/static/img/menSection.jpg"},
    ];
    // const temp = data;

    return(
        <div className={styles.mainCategory}>
            <MainCategory type={category}/>
            <CardSection title={name}/>
        </div>
        );

};

export default CategoryName;