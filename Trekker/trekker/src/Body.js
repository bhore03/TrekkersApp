import Trekkerscard from "./Trekkerscard";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router-dom";

const Body = () => {
    const { trekker } = useOutletContext();

    return trekker.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='cart'>
            {trekker.map((trek, index) => (
                <Trekkerscard key={index} {...trek} />
            ))}
        </div>
    );
};

export default Body;