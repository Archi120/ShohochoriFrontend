import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format, addDays, startOfDay, parseISO } from 'date-fns';
import { FaCalendar, FaClock, FaUser, FaCheck, FaSignOutAlt, FaCalendarPlus, FaExclamationCircle } from 'react-icons/fa';
import { API_BASE_URL } from './config/config';

const DoctorDashboard = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [viewType, setViewType] = useState('day');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAppointments = async () => {
        try {
            setLoading(true);
            const doctor_id = localStorage.getItem('doctor_id');
            const response = await axios.get(
                `${API_BASE_URL}/doctor/appointment/doctor/${doctor_id}/`
            );
            setAppointments(response.data || []); // Ensure we always have an array
        } catch (error) {
            console.error("API Error:", error);
            setError("Failed to fetch appointments");
            setAppointments([]); // Set empty array on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, [viewType]);

    const handleConfirmAppointment = async (appointment_id) => {
        try {
            await axios.post(`${API_BASE_URL}/doctor/appointment/confirm/`, {
                appointment_id,
                doctor_id: localStorage.getItem('doctor_id')
            });
            fetchAppointments(); // Refresh list after confirmation
        } catch (error) {
            setError("Failed to confirm appointment");
        }
    };

    const handleLogout = () => {
        // Clear localStorage data
        localStorage.removeItem('doctor_id');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        
        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className="container mt-4">
            {/* Header with doctor info and logout */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h2>My Appointments</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <div className="me-3">
                        <span className="fw-bold">
                            <FaUser className="me-1" />
                            Dr. {localStorage.getItem('name')}
                        </span>
                    </div>
                    <button 
                        className="btn btn-outline-danger" 
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="me-2" />
                        Logout
                    </button>
                </div>
            </div>

            {/* View type selector */}
            <div className="row mb-4">
                <div className="col-12 d-flex justify-content-end">
                    <div className="btn-group">
                        <button 
                            className={`btn ${viewType === 'day' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setViewType('day')}
                        >
                            Today
                        </button>
                        <button 
                            className={`btn ${viewType === 'threeDays' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setViewType('threeDays')}
                        >
                            3 Days
                        </button>
                        <button 
                            className={`btn ${viewType === 'week' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setViewType('week')}
                        >
                            Week
                        </button>
                    </div>
                </div>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : appointments.length > 0 ? (
                <div className="row">
                    {appointments.map(appointment => (
                        <div key={appointment.appointment_id} className="col-md-6 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="card-title mb-0">
                                            <FaUser className="me-2" />
                                            {appointment.user_name}
                                        </h5>
                                        <span className={`badge ${appointment.status === 'pending' ? 'bg-warning' : 'bg-success'}`}>
                                            {appointment.status}
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <FaCalendar className="me-2" />
                                        {appointment.date}
                                    </div>
                                    <div className="mb-3">
                                        <FaClock className="me-2" />
                                        {appointment.time}
                                    </div>
                                    {appointment.status === 'pending' && (
                                        <div className="d-flex justify-content-end">
                                            <button 
                                                className="btn btn-success"
                                                onClick={() => handleConfirmAppointment(appointment.appointment_id)}
                                            >
                                                <FaCheck className="me-2" />
                                                Confirm Appointment
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Empty state UI
                <div className="card shadow-sm border-0 py-5">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <FaCalendarPlus className="text-muted" style={{ fontSize: '4rem' }} />
                        </div>
                        <h3 className="mb-3">No Appointments Yet</h3>
                        <p className="text-muted mb-4">
                            You don't have any appointments scheduled at the moment. 
                            Your appointments will appear here when users book consultations with you.
                        </p>
                        <div className="bg-light p-4 rounded-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                            <h5 className="mb-3">
                                <FaExclamationCircle className="text-primary me-2" />
                                Getting Started
                            </h5>
                            <p className="mb-0">
                                Your profile is now active in our system. Patients can search for you 
                                and book appointments based on your specialty and availability. 
                                You'll receive notifications when new appointments are scheduled.
                            </p>
                        </div>
                        <button 
                            className="btn btn-outline-primary" 
                            onClick={() => fetchAppointments()}
                        >
                            <FaCalendar className="me-2" />
                            Refresh Appointments
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDashboard;