import Trekkerscard from "./Trekkerscard";
import Shimmer from "./Shimmer";

const Body = ({ trekker }) => {
    return (trekker.lenght === 0) ? <Shimmer/>  : (
        <div className='cart'>
            {trekker.map((trek, index) => (
                <Trekkerscard key={index} {...trek} />
            ))}
        </div>
    );
};

export default Body;
