import styles from "./MainCategory.module.css";


const MainCategory = (props)=>{



    return(
       <div className={styles.wrapper}>
           <h3>دسته بندی ها</h3>
           <div className={styles.container}>
                <div className={styles.content}>

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
                </div>
                
            </div>
       </div>
    );
};

export default MainCategory;