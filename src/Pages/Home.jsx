import Banner from "../Components/Banner";
import BrandsCards from "../Components/BrandsCards";
import Dontmiss from "../Components/Dontmiss";
import Testimonial from "../Components/Testimonial";
import Foodmarquee from "./Foodmarquee";
import Recipe from "./Recipe";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsCards></BrandsCards>
            <Dontmiss></Dontmiss>
            <Recipe></Recipe>
            <Testimonial></Testimonial>
            <Foodmarquee></Foodmarquee>
            
        </div>
    );
};

export default Home;