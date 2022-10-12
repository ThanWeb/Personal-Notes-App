import React from 'react';

const findYear = () => {
    let now = new Date();
    let year = `${now.getFullYear()}`;
    return year;
};
 
function Copyright() {
    return (
        <p>Copyright &#169; {findYear()} Hans Rio. All Right Reserved</p>
    );
}
 
export default Copyright;