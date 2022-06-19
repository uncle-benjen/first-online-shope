import Info from "../../../components/UI/itemDetail/Info";
import Overview from "../../../components/UI/itemDetail/Overview";
import GarantiSection from "../../../components/layout/garantiSection/GarantiSection";
import styles from '../../../styles/Home.module.css';
import CommentSection from "../../../components/UI/commentSection/CommentSection";
import { useRouter } from "next/router";
import { allItems } from "../../../lib/Items";
const ItemId =()=>{
    const router = useRouter();
   const card=[];
   allItems.map((item,index)=>{
           if(item.id === router.query.ItemId){
               console.log("hey");
           }
    });
    // console.log(card);
    return(
        <div className={styles.detailWrapper}>
            <Overview />
            <Info />
            <GarantiSection />
            <CommentSection />
        </div>
    );
}
export default ItemId