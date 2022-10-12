import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
    return (
        <nav className="navigation">
            <div>
                <Link to="/" className='notes-button home-page-button'>
                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/home_icon.png' alt='home'/>
                    <span>Home</span>
                </Link>
            </div>
            {/* <div>
                <h2>Not just a Note</h2>
            </div> */}
            <Link to="/add" className='notes-button add-page-button'>
                <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/add_circle_icon.png' alt='add'/>
            </Link>
            <div>
                <Link to="/archive" className='notes-button archive-page-button'>
                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/bookmark_icon.png' alt='archive'/>
                    <span>Archived</span>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navigation;