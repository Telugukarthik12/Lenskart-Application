
import React from 'react';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
//used to display homepage
const Homepage = () => {
   const history = useHistory();

   const [isHovering, setIsHovering] = useState(false);


   //used to handle Mouse Over Event
   const handleMouseOver = () => {

      setIsHovering(true);

   };


   //used to Handle Mouse Out Event
   const handleMouseOut = () => {

      setIsHovering(false);

   };

   const StartPage = () => {

      sessionStorage.removeItem("id");
      history.push("/nav");
   }

   return (
      <div >

         <h1 className="title"> WELCOME TO LENSKART </h1>
         <div className="pp" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            ABOUTUS
            {isHovering && (
               <div>
                  <p>We are providing comfortable Eye Glasses</p>
               </div>
            )}
         </div>
         <div className="btnstart">
            <button onClick={() => StartPage()}>Get Started</button>
         </div>
         <div className="cs">
            <h4>24/7 CUSTOMER SUPPORT</h4>
         </div>
         <div className="cu">
            <h4>CONTACT US </h4>
            <p>(040-22003344)</p>
         </div>
      </div>
   )

}
//exporting home page
export default Homepage;