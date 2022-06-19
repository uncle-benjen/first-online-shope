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




export async function userEmail() {
    const userDataArray =[{email: "", userName :"", imgSrc:"",currentNum : 0, deliverdNum : 0, returnedNum : 0}];
    const [userInfo, setUserInfo] = useState([userDataArray]);
    const [user, setUser] = useState();
    const [found , setFound] = useState();
    try {
        const { email } = await magic.user.getMetadata();
        if (email) {
            setUser(users.find(user=>user.email === res));
            setUserInfo({...userInfo, email : res, userName : createUserName(res), currentNum:user.currentOrdersId.length
                , deliverdNum: user.lastOrdersId.length, returnedNum : user.returnedNumber});
            setFound(allItems.filter(item => user.currentOrdersId.includes(item.id)));
            return {userInfo , found};
    }else{
        alert("we lost user Info try it later");
    }
    } catch (error) {
        console.log("Somthing went wrong", error);
    }
}
userEmail();

// userEmail().then(res =>{
//     if (res) {
//         setUser(users.find(user=>user.email === res));
//         setUserInfo({...userInfo, email : res, userName : createUserName(res), currentNum:user.currentOrdersId.length
//             , deliverdNum: user.lastOrdersId.length, returnedNum : user.returnedNumber});
//     }else{
//         alert("we lost user Info try it later");
//     }
// });
