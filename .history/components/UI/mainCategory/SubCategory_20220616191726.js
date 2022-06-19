import styles from "./MainCategory.module.css";
import { useRouter } from "next/router";


const SubCategory = (props)=>{
    const category = props.type;
    const router = useRouter();

    // const clickHandler = ( itemName) =>{
    //     if (condition) {
            
    //     }
    // }   
    return(
        <div className={styles.wrapper}>
            <h3>دسته بندی ها</h3>
            <div className={styles.container}>
                 {category.map((item,index)=>{
                     return(
                         <div key={index} className={styles.content} onClick={(e)=>{props.clickHandler(item.name, e)}}>
                             <figure className={styles.figure}>
                                <div className={styles.imgWrapper}>
                                    <Image src={item.img} alt={`${item.name} img`} layout="fill" objectFit="cover"/>
                                </div>
                                 {/* <img src={item.img} alt={`${item.name} img`}/> */}
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