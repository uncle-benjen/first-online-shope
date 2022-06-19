
const allItems=  [
  {id:22,category:"men-t1" ,title:"اسم محصول", subTitle:"1مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t2" ,title:"اسم محصول", subTitle:"2مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t1" ,title:"اسم محصول", subTitle:"1زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t1" ,title:"اسم محصول", subTitle:"1مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t1" ,title:"اسم محصول", subTitle:"1بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t2" ,title:"اسم محصول", subTitle:"2زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t2" ,title:"اسم محصول", subTitle:"2مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t3" ,title:"اسم محصول", subTitle:"3زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t1" ,title:"اسم محصول", subTitle:"1زنانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t2" ,title:"اسم محصول", subTitle:"2بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"3مردانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t3" ,title:"اسم محصول", subTitle:"3بچگانه",imgSrc:"/static/img/shirt.png" ,price:52222, off:"52%", priceWithOff:20000},
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