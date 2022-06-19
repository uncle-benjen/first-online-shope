import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";
import MainCategory from '../../components/UI/mainCategory/MainCategory';
import CardSection from '../../components/UI/cardSection/CardSection';

const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    // const temp = data;

    return(
        <div className={styles.mainCategory}>
            <MainCategory />
            <CardSection title={name}/>
        </div>
        );

};

export default CategoryName;