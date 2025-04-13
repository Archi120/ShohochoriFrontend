import React, { useState } from 'react';
import SidebarLayout from './components/SidebarLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhysicalFitnessPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const videos = [
        {
            title: 'Yoga for Seniors',
            url: 'https://www.youtube.com/embed/kFhG-ZzLNN4?si=ClHWDfRiWUcMz9qB',
        },
        {
            title: '5 Minute Mindfulness Meditation',
            url: 'https://www.youtube.com/embed/ssss7V1_eyA?si=IG4vHRB8ib6qsVXm',
        },
        {
            title: 'Flexibility Exercises',
            url: 'https://www.youtube.com/embed/5rJPwLkXzvg?si=QT-mbP61JuXkBx2N',
        },
        {
            title: 'Mindful Meditation',
            url: 'https://www.youtube.com/embed/U_jdXFfegKE?si=3mYbVpTfqCMx3s2E',
        },
        {
            title: 'Strength Training Basics',
            url: 'https://www.youtube.com/embed/nQwKKCqkJxg?si=CY9G48PJgGSh3xdA',
        },
        {
            title: 'Cardio Workout',
            url: 'https://www.youtube.com/embed/vj0JDwQLof4?si=KMVcwL1CT_wG4jPl',
        },
        {
            title: 'HIIT Workout',
            url: 'https://www.youtube.com/embed/r17USrUBLY4?si=PJr7GrZ79EjZgZ_X',
        },
        {
            title: 'Full Body Workout',
            url: 'https://www.youtube.com/embed/W4eKVKwf3rQ',
        },
        {
            title: 'Yoga for Beginners',
            url: 'https://www.youtube.com/embed/-hSma-BRzoo',
        },
    ];

    const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SidebarLayout>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Physical Fitness</h1>
                <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row">
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map((video, index) => (
                            <div key={index} className="col-lg-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">{video.title}</h5>
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={video.url}
                                                title={video.title}
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="alert alert-info">No videos found</p>
                        </div>
                    )}
                </div>
            </div>
        </SidebarLayout>
    );
};

export default PhysicalFitnessPage;
