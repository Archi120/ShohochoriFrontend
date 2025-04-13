import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHome, FaRunning, FaUsers, FaUserMd, FaHandsHelping, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarLayout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear localStorage data
        localStorage.removeItem('user_id');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        
        // Redirect to login page
        navigate('/login');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar>
                <Menu>
                    <MenuItem component={<Link to="/home" />} icon={<FaHome />}>Home</MenuItem>
                    <MenuItem component={<Link to="/physical-fitness" />} icon={<FaRunning />}>Physical Fitness</MenuItem>
                    <MenuItem component={<Link to="/social-media" />} icon={<FaUsers />}>Social Media</MenuItem>
                    <MenuItem component={<Link to="/doctor" />} icon={<FaUserMd />}>Doctor</MenuItem>
                    <MenuItem component={<Link to="/assistance" />} icon={<FaHandsHelping />}>Assistance</MenuItem>
                    <MenuItem 
                        icon={<FaSignOutAlt />}
                        onClick={handleLogout}
                        style={{ marginTop: 'auto', color: '#dc3545' }}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </Sidebar>
            <div style={{ flexGrow: 1, padding: '0', overflow: 'auto' }}>
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;