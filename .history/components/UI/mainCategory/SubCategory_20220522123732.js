import styles from "./MainCategory.module.css";
import { useRouter } from "next/router";


const SubCategory = (props)=>{
    const category = props.type;
    console.log(category);

    const router = useRouter();

    const categoryClickHandler = ( url) =>{
        router.push(url)
    }

    return(
       <div className={styles.wrapper}>
           <h3>دسته بندی ها</h3>
           <div className={styles.container}>
                <div className={styles.content}>
                    <figure className={styles.figure}>
                        <img src="./static/img/pay.png" alt="women img"/>
                        <figcaption className={styles.figcaption}>
                           زنانه
                        </figcaption>
                    </figure>
                </div>                
            </div>
       </div>
    );
};

export default SubCategory;