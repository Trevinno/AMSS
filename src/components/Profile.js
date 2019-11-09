import React, { Component } from 'react';
import './css/Profile.css'

const Profile = () => {
    return(
    <div>
    <header>
        
            <div className="name">
                Carolina Williams
            </div>

            <div className="ava">
                <img src="https://api.sololearn.com/Uploads/Avatars/868188.jpg" alt="avatar"/>
            </div>    

        </header>
        <div className="content">
            <div className="info ">
                <div className="box">
                    <p className="title">
                        <i className="fa fa-info-circle"></i>Contact
                    </p>
                    <p className="padd-top">
                        <i className="fa fa-birthday-cake"></i>
                        2-2-2222
                    </p>

                    <p>
                        <i className="fa fa-phone"></i>
                        0123456789
                    </p>            

                    <p>
                        <i  className="fa fa-envelope"></i>
                        qwerty@gmail.com
                    </p>                

                    <p>
                        <i className="fa fa-home"></i>
                        123 lorem ipsum, 
                    </p>                

                </div> 
                </div>  
                </div>
        </div>
    );
}

export default Profile;