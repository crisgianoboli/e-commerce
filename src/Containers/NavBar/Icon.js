import React from "react";
import { Link } from 'react-router-dom';
import { GiBasketballBall } from "react-icons/gi";



const Icon = () => {
    return (
        <div>
        <Link to='/' className="link-icon">
        <GiBasketballBall className="icono"/>
        </Link>
    </div> 
    )  
}


export default Icon;
