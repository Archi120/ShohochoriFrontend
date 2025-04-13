import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSignInAlt, FaUserPlus, FaHeart, FaUserMd, FaHandsHelping,
    FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook,
    FaTwitter, FaInstagram, FaLinkedin
} from 'react-icons/fa';
import './css/LandingPage.css'; // Import your CSS file


         
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-vh-100 bg-light">
            {/* Hero Section */}
            <div className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-4">Welcome to Shohochori</h1>
                            <p className="lead mb-4">
                                Your comprehensive platform for elderly care and assistance. 
                                Connect with doctors, assistants, and maintain your physical fitness.
                            </p>
                            <div className="d-flex gap-3">
                                <button 
                                    className="btn btn-light btn-lg px-4"
                                    onClick={() => navigate('/login')}
                                >
                                    <FaSignInAlt className="me-2" />
                                    Sign In
                                </button>
                                <button 
                                    className="btn btn-outline-light btn-lg px-4"
                                    onClick={() => navigate('/register')}
                                >
                                    <FaUserPlus className="me-2" />
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            {/* You can add an illustration or image here */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container py-5">
                <h2 className="text-center mb-5">Our Features</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <FaHeart className="text-primary mb-3" size={40} />
                                <h4>Physical Fitness</h4>
                                <p className="text-muted">
                                    Access personalized fitness programs and track your health progress.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <FaUserMd className="text-primary mb-3" size={40} />
                                <h4>Medical Assistance</h4>
                                <p className="text-muted">
                                    Connect with qualified doctors and schedule appointments easily.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <FaHandsHelping className="text-primary mb-3" size={40} />
                                <h4>Daily Assistance</h4>
                                <p className="text-muted">
                                    Get help with daily tasks from our verified assistants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
             <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row g-4">
                        {/* About Column */}
                        <div className="col-lg-4 col-md-6">
                            <h5 className="mb-4">About ElderCare</h5>
                            <p className="mb-4">Providing comprehensive care solutions for elderly people through our innovative platform, ensuring comfort and well-being.</p>
                            <div className="social-links">
                                <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
                                <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
                                <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
                                <a href="#" className="text-white"><FaLinkedin size={24} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Our Services</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">24/7 Medical Support</li>
                                <li className="mb-2">Physical Fitness Programs</li>
                                <li className="mb-2">Daily Assistance</li>
                                <li className="mb-2">Mental Health Support</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <FaMapMarkerAlt className="me-2" />
                                    123 Elder Street, Care City, EC 12345
                                </li>
                                <li className="mb-3">
                                    <FaPhone className="me-2" />
                                    +1 (123) 456-7890
                                </li>
                                <li className="mb-3">
                                    <FaEnvelope className="me-2" />
                                    info@eldercare.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-4 mt-4 border-top">
                        <p className="mb-0">&copy; 2024 ElderCare. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
