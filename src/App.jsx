import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './LandingPage'
import LoginPage from './Login'
import HomePage from './Home'
import RegisterPage from './Register'
import PhysicalFitnessPage from './PhysicalFitness'
import SocialMediaPage from './SocialMedia'
import DoctorPage from './Doctor'
import AssistancePage from './Assistance'
import AssistantDashboard from './AssistantDashboard'
import DoctorDashboard from './DoctorDashboard'

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('token');
        if (token && window.location.pathname === '/') {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/physical-fitness" element={<PhysicalFitnessPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/assistance" element={<AssistancePage/>} />
            <Route path="/assistant_dashboard" element={<AssistantDashboard />} />
            <Route path="/doctor_dashboard" element={<DoctorDashboard />} />
        </Routes>
    )
}

export default App