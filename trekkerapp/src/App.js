import { useState } from "react";
import './App.css';
import Header from "./Header";
import Body from "./Body";
import trekkerslist from "./trekkerslist";

const App = () => {
    const [trekker, setTrekker] = useState(trekkerslist);

    const filterData = (searchText) => {
        const filteredTrekker = trekkerslist.filter(trek =>
            trek.name.some(name => name.includes(searchText)) 
        );
        setTrekker(filteredTrekker);
    };

    return (
        <div>
            <Header onSearch={filterData} />
            <Body trekker={trekker} />
        </div>
    );
};

export default App;