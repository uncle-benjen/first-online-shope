import Info from "../../../components/UI/itemDetail/Info";
import Overview from "../../../components/UI/itemDetail/Overview";
import GarantiSection from "../../../components/layout/garantiSection/GarantiSection";
import styles from '../../../styles/Home.module.css';
import CommentSection from "../../../components/UI/commentSection/CommentSection";
import { useRouter } from "next/router";
import { allItems } from "../../../lib/Items";
import { useCart } from "react-use-cart";

const ItemId =()=>{
    const router = useRouter();
    const { addItem } = useCart();

   const card={};
   allItems.map((item,index)=>{
    //    console.log(item.id, router.query.itemId);
    // console.log(item);
           if(item.id === parseInt(router.query.itemId)){
               console.log("hey");
               card = item;
           }
    });
    return(
        <div className={styles.detailWrapper}>
            <Overview item={card} add={()=>addItem(card)}/>
            <Info />
            <GarantiSection />
            <CommentSection />
        </div>
    );
}
export default ItemId