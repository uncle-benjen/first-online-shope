import Info from "../../../components/UI/itemDetail/Info";
import Overview from "../../../components/UI/itemDetail/Overview";
import GarantiSection from "../../../components/layout/garantiSection/GarantiSection";
import styles from '../../../styles/Home.module.css';
import CommentSection from "../../../components/UI/commentSection/CommentSection";
import { useRouter } from "next/router";

const ItemId =()=>{
    const router = useRouter();
    console.log(router.query.itemId);
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