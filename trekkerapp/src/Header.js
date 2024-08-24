
import { useState } from "react";

const Header = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className='header'>
            <div className="navbar">
                <a href='http://localhost:3000'>
                    <img src="https://t4.ftcdn.net/jpg/04/63/47/15/360_F_463471518_jrYA32uYYdHYHOGFRXZynHEyabVRwMJo.jpg" alt="Logo" />
                </a>
                <div className='nav'>
                    <ul>
                        <li>Home</li>
                        <li>Packages</li>
                        <li>Trekkers</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='Searchbar'>
                <input
                    type="text"
                    className="Text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => onSearch(searchText)}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
