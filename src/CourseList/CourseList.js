import React from 'react';
import './CourseList.css';
import Courses from '../Courses/Courses.js';
import CourseUL from './CourseUL.js';
function CourseList() {
    return (
        <div id="search-and-list">
            <CourseSearch />
            <CourseUL />
        </div>
    );
}

function CourseSearch() {
    return (
        <div id="search-combo-div" className="search-combo-div">
            <form id="course-search-form">
                <input className="course-search-input" />
            </form>
            <button id="course-search-button">GO!</button>
        </div>
    );
}

export default CourseList;
