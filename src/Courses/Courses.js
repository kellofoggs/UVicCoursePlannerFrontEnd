class Courses {
    constructor() {
        this.course_list = [];
        // A map of courses, with the course program as the key
        this.course_map = {};
        this.programs = [];
    }

    fetch_resource(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON data
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    async add_courses_to_list() {
        const course_api_link = 'http://localhost:8080/api/v1/courses';

        try {
            const data = await this.fetch_resource(course_api_link);

            for (let i = 0; i < data.length; i++) {
                let courseCode = data[i]['courseCode'];
                let courseName = data[i]['courseName'];
                let program_name = data[i]['programName'];

                if (!(program_name in this.course_map)) {
                    this.course_map[program_name] = [];
                }

                let course = {
                    "courseCode": courseCode,
                    "courseName": courseName
                };

                this.course_map[program_name].push(course);
                //   courses.push({
                //     "code": courseCode,
                //     "name": courseName,
                //     "programName": program_name  
                //   });
            }
            this.programs.sort();
            console.log(this.course_map);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }

        return this.programs;
    }
}

export default Courses;
