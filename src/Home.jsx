import React from 'react';
import SidebarLayout from './components/SidebarLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import headerImage from './assets/homepic.jpg'; // Add your image

const HomePage = () => {
    return (
        <SidebarLayout>
            <div className="header-container">
                <img 
                    src={headerImage} 
                    alt="Elder Care Header" 
                    className="header-banner"
                />
                <div className="header-text">
                    <h1>Welcome to Shohochori</h1>
                    <p>Your trusted companion in elderly care</p>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="text-center">Home</h1>
                <p className="text-center">Welcome to the home page.</p>
                <p className="text-center">“Aging is not ‘lost youth’ but a new stage of opportunity and strength.”
– Betty Friedan.</p>
            </div>
            
        </SidebarLayout>
    )
};

export default HomePage;