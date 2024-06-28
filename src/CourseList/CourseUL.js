import React, { useState, useEffect } from 'react';
import Courses from '../Courses/Courses.js';

function CourseUL() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const courseInstance = new Courses();
            const fetchedCourses = await courseInstance.add_courses_to_list();
            setCourses(fetchedCourses);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul id="course-ul" className="search-list">
            {courses.map((course, index) => (
                <li key={index}>{course}</li>
            ))}
        </ul>
    );
}

export default CourseUL;
