import Info from "../../../components/UI/itemDetail/Info"
import Overview from "../../../components/UI/itemDetail/Overview";
import GarantiSection from "../../../components/layout/garantiSection/GarantiSection";
import styles from '../../../styles/Home.module.css';
import CommentSection from "../../../components/UI/commentSection/CommentSection";
import { useRouter } from "next/router";
import { allItems } from "../../../lib/Items";
import { useCart } from "react-use-cart";
import { useState } from "react";


export async function getStaticPaths() {
    const paths = allItems.map(item =>({
        params: {itemId: item.id.toString()},
    }))
    console.log(paths);
    // const fileNames = fs.readdirSync(allItems.map(item=>([item.id,])));
    return {
     paths,
        fallback: false
    };

  }
  
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = allItems.find(item => params.id === item.id.toString());
    // console.log(allItems);
    return {
      props: {
        postData,
      },
    };
  }



const ItemId = ({postData, params})=>{
    const router = useRouter();
    console.log(params);
    
    // console.log(postData);
    const itemTemp= [{
        id:1,category:"men-t1",imgs:["/static/img/itemsImg/item1.png","/static/img/itemsImg/1.png","/static/img/itemsImg/1-1.png"], size:"", availbleSize:["L", "XL","XLL"],
        availbleColors:["red", "green", "blue"], commentNum:45, property:["ساده", "ساده", "ساده", "ساده", ], 
        comments:[{userName:"امین پورمحمدیان", userImg:"/static/img/shirt.png", date:"۴ مرداد ۱۳۹۹", rate:4.5, title:"پیشنهاد میشه",
        subTitle:"نظرمن دستگاه خوبی برای ماارسال نشده بودویک سری نقاط ضعف مثل سائیدگی ویاخط وخش داشت...البته بنده مرجوع کردم که دیجی کالا به سرعت کالارامرجوع نمود...بنده ازتمامی عوامل دیجی کالا به خاطرخدمات پس ازفروش بسیارخوبشون سپاسگزارم"}]
        ,title:"پولو شرت", subTitle:"مردانه",imgSrc:"/static/img/itemsImg/item1.png" ,price:2200000, off:"52%", priceWithOff:20000
      },];
    const { addItem } = useCart();
    let card;
    card = allItems.find(item => item.id === parseInt(router.query.itemId));
//    allItems.map((item,index)=>{
//            if(item.id === parseInt(router.query.itemId)){
//                card = item;
//            }
//     });
    // const itemComment = card.comments;
    // if (card === undefined) {
    //     card = itemTemp;
    // }
    if (router.isFallback) {
        return <div>Loading...</div>;
      }
    return(
                <div className={styles.detailWrapper}>
                    {/* <Head> */}
                        {/* <title>{card.title}</title> */}
                        {/* <meta name="item" content="Generated by rApToR" /> */}
                    {/* </Head> */}
                    <Overview item={card} add={()=>addItem(card)}/>
                    <Info />
                    <GarantiSection />
                    <CommentSection comments={card}/>
                </div>
    );
}
export default ItemId;