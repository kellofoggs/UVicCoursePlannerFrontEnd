import React, { useState, useEffect } from 'react';
import Courses from '../Courses/Courses.js';
import fetch_resource from '../Fetch/fetch.js';
const course_api_link = 'http://localhost:8080/api/v1/courses';

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


function add_courses_to_list(){
    fetch_resource(course_api_link).then(data=> {
        console.log("HEY THERE!")
        let courses = [];
        for (let i = 0; i < data.length; i++){
          let courseCode = data[i]['courseCode'];
          let courseName = data[i]['courseName'];
          let newElement = document.createElement("li");
          newElement.className = "course_view_ele";
          var newButton = document.createElement("button");
  
          let code_span = document.createElement("span");
          let name_span = document.createElement("span");
          let divider_span = document.createElement("span");
          newButton.className = "course_view_button"
        //   newButton.addEventListener("click", function(){draw_full_prereq(courseCode)});
  
          newButton.id = courseCode;
          newElement.append(newButton)
          code_span.textContent = courseCode;
          name_span.textContent = courseName
          divider_span.textContent = " - "
          newButton.append(code_span);
          newButton.append(divider_span);
          newButton.append(name_span);
          // newButton.textContent = `${courseCode} - ${courseName}`;
          // courses.push(newButton.textContent)
  
  
          // document
            // console.log()
        }
        })
    }
  

export default CourseUL;
