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

   
    const card = allItems.find(item =>{
        item.id === parseInt(router.query.itemId);
    });
    console.log(card);
//    allItems.map((item,index)=>{
//            if(item.id === parseInt(router.query.itemId)){
//                card = item;
//            }
//     });
    const itemComment = card.comments;
    return(
        <div className={styles.detailWrapper}>
            <Overview item={card} add={()=>addItem(card)}/>
            <Info />
            <GarantiSection />
            <CommentSection comments={itemComment}/>
        </div>
    );
}
export default ItemId