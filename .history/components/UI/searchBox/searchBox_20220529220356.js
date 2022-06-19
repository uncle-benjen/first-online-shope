import styles from "./searchBox.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const SearchBox = ()=>{
    const [showBox, setShowBox]= useState(false);
    const searchBoxHandler =()=>{
        setShowBox(!showBox);
    };
    return(
        <div className={styles.content}>
            <div className={styles.search}>
            <input type="text" className={styles.search__input} aria-label="search" placeholder="...جستجو"/>

            <button className={styles.search__submit} aria-label="submit search">
                    <Link  href="#"> 
                            <a >
                                <div className={styles.iconWrapper}>
                                    <Image className={styles.icon} src="/static/icons/search-normal.svg" alt="Search icon"
                                    layout="fill" objectFit="cover"/>
                                </div>
                            </a>
                    </Link>
                </button>
            </div>
        </div>
        
    );
}

export default SearchBox;