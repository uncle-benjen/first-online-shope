import { allItems } from "./Items";
import {useState} from "react";
import { createUserName } from "../components/layout/header/Header";
import {magic} from "./magicClient";


export const users = 
[
    {id : 1, fullName:"علی مردانی",imgSrc:"/static/img/profile.jpg", email:"unclebenjenn@gmail.com", nationalCode:"1540520595", phone:"091425666457",
    addresses:[{city:"مراغه", address:"شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳"},],lastOrdersId:[1,5,4],
    currentOrdersId :[2,3],returnedNumber: 2, 
    },
    {id : 2, fullName:"علی لهراسبیان",imgSrc:"/static/img/profile.jpg", email:"aliaminicr99@gmail.com", nationalCode:"155568452", phone:"091425666457",
    addresses:[{city:"تهران", address:"شمس تبریزی، بل کرمی، کوی امام خمینی، خ. امام خمینی، ک. ۳"},],lastOrdersId:[8,10,16],
    currentOrdersId :[4,5,22],returnedNumber: 2, },
];


export const userOrders= [
    {id:1, itemsId:[2, 3, 4],totalPrice:"2000000",date:"۷ اسفند ۱۳۹۸"},
    {id:2, itemsId:[6, 2, 12],totalPrice:"5000000",date:"۷ اسفند ۱34۸"},
];
console.log(userOrders);
// export const orderitems = allItems.filter(item => userOrders.itemsId.includes(item.id));