import styles from "./MainCategory.module.css";
import { useRouter } from "next/router";


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
                                <img src={item.img} alt={`${item.name} img`}/>
                                <figcaption className={styles.figcaption}>
                                    {item.name}
                                </figcaption>
                            </figure>
                        </div>
                    );
                })}
                

                {/* <div className={styles.content}>
                            <figure className={styles.figure}>
                                <img src="./static/img/menSection.jpg" alt="kid img"/>
                                <figcaption className={styles.figcaption}>
                                    بچگانه
                                </figcaption>
                            </figure>
                        </div>

                <div className={styles.content}>
                    <figure className={styles.figure}>
                        <img src="./static/img/womenSection.jpg" alt="women img"/>
                        <figcaption className={styles.figcaption}>
                           زنانه
                        </figcaption>
                    </figure>
                </div>
                <div className={styles.content}>
                    <figure className={styles.figure}>
                        <img src="./static/img/womenSection.jpg" alt="men img"/>
                        <figcaption className={styles.figcaption}>
                            مردانه
                        </figcaption>
                    </figure>
                </div> */}
                
            </div>
       </div>
    );
};

export default MainCategory;