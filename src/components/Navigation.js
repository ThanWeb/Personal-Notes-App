import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/ThemeContext';
 
function Navigation({ logout, setTheme }) {
    return (
        <ThemeConsumer>
            {
                (theme) => {
                    return (
                        <nav className="navigation">
                            <div>
                                <Link to="/" className='notes-button home-page-button'>
                                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/home_icon.png' alt='home'/>
                                    <span>Home</span>
                                </Link>
                            </div>
                            <img onClick={setTheme} className='notes-button theme-button' src={theme === 'light' ? 'http://antekteknologi.my.id/wp-content/uploads/2022/10/light_mode_icon.png' : 'http://antekteknologi.my.id/wp-content/uploads/2022/10/dark_mode_icon.png'} alt='change-theme'/>
                            <Link to="/add" className='notes-button add-page-button'>
                                <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/add_circle_icon.png' alt='add'/>
                            </Link>
                            <div>
                                <Link to="/archive" className='notes-button archive-page-button'>
                                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/bookmark_icon.png' alt='archive'/>
                                    <span>Archived</span>
                                </Link>
                                <button className='notes-button log-out-button' onClick={logout}>
                                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/logout-icon.png' alt='log-out'/>
                                    <span>Log out</span>
                                </button>
                            </div>
                    </nav>
                    );
                }
            }
        </ThemeConsumer>
    );
}
 
export default Navigation;