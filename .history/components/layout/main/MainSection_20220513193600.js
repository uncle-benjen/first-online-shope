import MainCategory from "../../UI/mainCategory/MainCategory";
import OfferSection from "../../UI/offerSection/OfferSection";
import SellSection from "../../UI/sellSection/SellSection";

const MainSection = () =>{
    return(
        <div>
            <MainCategory />
            <SellSection type="women"/>
            <OfferSection />
            <SellSection type="men"/>
        </div>
    );
};

export default MainSection;