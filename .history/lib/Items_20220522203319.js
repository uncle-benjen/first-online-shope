
const allItems=  [
  {id:22,category:"men-t1" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t2" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t1" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t1" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t1" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t2" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t2" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t3" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-t1" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t2" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-t3" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-t3" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
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
const menTshirt = [];
menSectionShow.filter((item, index)=>{
    if (item.category === "men-Tshirt") {
        
    }
})

export {menSectionShow, womenSectionShow, kidSectionShow};
console.log(menSectionShow);