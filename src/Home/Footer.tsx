import React from 'react';


export const Footer: React.FC= () =>{
    return(
        <React.Fragment>
                  {/* <!--FONT AWESOME-->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                <!--GOOGLE FONTS-->
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet">  */}
                
                <footer>
                <div className="footer">
                <div className="row">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                <a href="https://twitter.com/?lang=en-in"><i className="fa fa-twitter"></i></a>
                </div>

                <div className="row">
                <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
               
                </ul>
                </div>

                <div className="row">
                Yummy Wheels Copyright © 2022 - All rights reserved || Designed By: Aditi Yadav
                </div>
                </div>
                </footer>

        </React.Fragment>
    )
}