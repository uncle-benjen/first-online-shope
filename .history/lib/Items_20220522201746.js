
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

let menSectionShow ;
let womenSectionShow ;
let kidSectionShow ;


 allItems.filter((item, index)=>{
        if (item.category.includes("men")) {
            menSectionShow.push(item); 
        }else if (item.category.includes("women")) {
            womenSectionShow.push(item); 
        }else if (item.category.includes("kids")) {
            kidSectionShow.push(item); 
        }
   
})

export menSectionShow, womenSectionShow, kidSectionShow;
console.log(menSectionShow);