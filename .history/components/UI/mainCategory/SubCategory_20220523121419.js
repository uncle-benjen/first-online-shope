import styles from "./MainCategory.module.css";
import { useRouter } from "next/router";


const SubCategory = (props)=>{
    const category = props.type;
console.log(category);
    const router = useRouter();

    const clickHandler = ( itemName) =>{
        if (condition) {
            
        }
    }   
    return(
        <div className={styles.wrapper}>
            <h3>دسته بندی ها</h3>
            <div className={styles.container}>
                 {category.map((item,index)=>{
                     return(
                         <div key={index} className={styles.content} onClick={()=>{props.clickHandler(item.name)}}>
                             <figure className={styles.figure}>
                                 <img src={item.img} alt={`${item.name} img`}/>
                                 <figcaption className={styles.figcaption}>
                                     {item.name}
                                 </figcaption>
                             </figure>
                         </div>
                     );
                 })}
             </div>
        </div>
     );
};

export default SubCategory;