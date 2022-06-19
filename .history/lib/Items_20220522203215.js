
const allItems=  [
  {id:22,category:"men-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-suishirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-Tshirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-palto" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-captishion" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-Tshirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"women-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-Tshirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"men-shirt" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
  {id:22,category:"kids-ddddd" ,title:"اسم محصول", subTitle:"",imgSrc:"/static/img/menSection.jpg" ,price:52222, off:"52%", priceWithOff:20000},
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
const menTshirt = [] ;
menSectionShow.filter((item, index)=>{
    if (item.category === "men-Tshirt") {
        
    }
})

export {menSectionShow, womenSectionShow, kidSectionShow};
console.log(menSectionShow);