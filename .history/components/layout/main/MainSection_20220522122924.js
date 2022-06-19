import MainCategory from "../../UI/mainCategory/MainCategory";
import OfferSection from "../../UI/offerSection/OfferSection";
import SellSection from "../../UI/sellSection/SellSection";

const MainSection = () =>{
    const category = [
        {name:"مردانه", url:"/main-category/men", img:"./static/img/menSection.jpg"},
        {name:"زنانه", url:"/main-category/men", img:"./static/img/WomenSection.jpg"},
        {name:"بچگانه", url:"/main-category/men", img:"./static/img/menSection.jpg"},
    ];
    return(
        <div>
            <MainCategory type={category}/>
            <SellSection type="women"/>
            <OfferSection />
            <SellSection type="men"/>
        </div>
    );
};

export default MainSection;