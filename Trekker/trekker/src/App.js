import { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import trekkerslist from "./trekkerslist";
import { Outlet } from "react-router-dom";

const App = () => {
    const [trekker, setTrekker] = useState(trekkerslist);

    const filterData = (searchText) => {
        const filteredTrekker = trekkerslist.filter(trek =>
            trek.name.some(name => name.toLowerCase().includes(searchText.toLowerCase())) 
        );
        setTrekker(filteredTrekker);
    };

    return (
        <div>
            <Header onSearch={filterData} />
            <Outlet context={trekker}/>
            <Footer/>
        </div>
    );
};

export default App;