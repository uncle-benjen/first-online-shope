
export const allItems=  [
  {id:2,category:"men-t1",imgs:["/static/img/shirt.png","/static/img/shirt.png","/static/img/shirt.png"], size:"", availbleColors:["red", "green, blue"]
  ,title:"اسم محصول", subTitle:"1مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:3,category:"men-t2" ,title:"اسم محصول", subTitle:"2مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:4,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:52,category:"women-t1" ,title:"اسم محصول", subTitle:"1زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:62,category:"men-t1" ,title:"اسم محصول", subTitle:"1مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:72,category:"kids-t1" ,title:"اسم محصول", subTitle:"1بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:52,category:"women-t2" ,title:"اسم محصول", subTitle:"2زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:32,category:"men-t2" ,title:"اسم محصول", subTitle:"2مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:82,category:"women-t3" ,title:"اسم محصول", subTitle:"3زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:92,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t1" ,title:"اسم محصول", subTitle:"1زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:23,category:"kids-t2" ,title:"اسم محصول", subTitle:"2بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:24,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:25,category:"kids-t3" ,title:"اسم محصول", subTitle:"3بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
];

//  export   let menSectionShow ;
//  export   let womenSectionShow ;
//  export   let kidSectionShow ;
 const menSectionShow=[];
 const womenSectionShow=[];
 const kidSectionShow=[];

 allItems.filter((item, index)=>{
        if (item.category.startsWith("men")) {
           menSectionShow.push(item);
        }else if (item.category.startsWith("women")) {
            womenSectionShow.push(item); 
        }else if (item.category.startsWith("kids")) {
            kidSectionShow.push(item); 
        }
});

const ment1 = [];
const ment2 = [];
const ment3 = [];
menSectionShow.filter((item, index)=>{
    if (item.category === "men-t1") {
        ment1.push(item);
    }
    if (item.category === "men-t2") {
        ment2.push(item);
    }
    if (item.category === "men-t3") {
        ment3.push(item);
    }
})

export {menSectionShow, womenSectionShow, kidSectionShow, ment1, ment2, ment3};
// console.log(menSectionShow);