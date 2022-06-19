import MainCategory from "../../UI/mainCategory/MainCategory";
import OfferSection from "../../UI/offerSection/OfferSection";
import SellSection from "../../UI/sellSection/SellSection";
import { menSectionShow, womenSectionShow, offerSection } from "../../../lib/Items";
const MainSection = () =>{
    const category = [
        {name:"مردانه", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زنانه", url:"/main-category/women", img:"/static/img/WomenSection.jpg"},
        {name:"بچگانه", url:"/main-category/kids", img:"/static/img/kidsSection.jpg"},
    ]; 
    const menCards = menSectionShow.slice(0, 6);
    const womenCards = womenSectionShow.slice(0, 6);
    return(
        <div>
            <MainCategory type={category}/>
            <SellSection type="women" cards={womenCards}/>
            <OfferSection  cards = {offerSection}/>
            <SellSection type="men" cards={menCards}/>
        </div>
    ); 
};

export default MainSection;