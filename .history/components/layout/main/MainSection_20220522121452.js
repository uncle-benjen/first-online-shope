import MainCategory from "../../UI/mainCategory/MainCategory";
import OfferSection from "../../UI/offerSection/OfferSection";
import SellSection from "../../UI/sellSection/SellSection";

const MainSection = () =>{
    const category = [
        {name:"مردانه", url:"/main-category/men"},
        {name:"مردانه", url:"/main-category/men"},
        {name:"مردانه", url:"/main-category/men"},
    ];
    return(
        <div>
            <MainCategory main={category}/>
            <SellSection type="women"/>
            <OfferSection />
            <SellSection type="men"/>
        </div>
    );
};

export default MainSection;