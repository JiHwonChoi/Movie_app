
import React from "react";
import './About.css';
import Navigation from "../components/Navigation";

function About (){
   return (
       <div>
           <Navigation></Navigation>
           <div className="about__container">
           

           <span>
               "Freedom is the freedom to say that hwo plus two make four."
           </span>
           <span> by George Orwell, 1984

           </span>    
       </div>
       </div>
       
   )
   
}

export default About;