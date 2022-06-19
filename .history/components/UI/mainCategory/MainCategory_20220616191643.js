import styles from "./MainCategory.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const MainCategory = (props)=>{
    const category = props.type;

    const router = useRouter();

    const categoryClickHandler = ( url) =>{
        router.push(url)
    }

    return(
       <div className={styles.wrapper}>
           <h3>دسته بندی ها</h3>
           <div className={styles.container}>
                {category.map((item,index)=>{
                    return(
                        <div key={index} className={styles.content} onClick={(e)=>{
                            e.preventDefault();
                            router.push(item.url)
                        }}>
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

export default MainCategory;