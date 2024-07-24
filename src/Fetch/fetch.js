const course_api_link = 'http://localhost:8080/api/v1/courses';

function fetch_resource(url) {
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

