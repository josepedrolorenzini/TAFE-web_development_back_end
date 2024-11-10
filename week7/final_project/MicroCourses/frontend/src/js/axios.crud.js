import axios from "axios";

/// forms data methods

    /// formdata object contains
    // const form = document.forms[0];
    // const formData = new FormData(form);
    // const values = [...formData.entries()];
    // console.log(values);

    // create new course object with values from form fields

axios.post('/addCourse', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCourse)
  }).then(() => {})