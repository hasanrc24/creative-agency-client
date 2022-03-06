import React from 'react';
import Banner from './Banner/Banner';
import Navigationbar from './NavigationBar/NavigationBar';
import './Header.css';

const Header = () => {
    // const [admin, setAdmin] = useState([]);
    // useEffect(() =>{
    //         fetch('https://safe-inlet-61017.herokuapp.com/admin')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setAdmin(data)
    //         })
    // }, [])
    return (
        <div id="header" className="header-bg">
            <Navigationbar />
            <Banner />
        </div>
    );
};

export default Header;