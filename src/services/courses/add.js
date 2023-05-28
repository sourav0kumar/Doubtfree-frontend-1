import axios from "axios"

export async function AddCourseService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`http://127.0.0.1:5000/addcourse`, formData, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else if (res.data.error === "Access Denied! You are not eligible to add course.") {
        msg = res.data.error;
    } else {
        msg = "Course Added";
    }
    return msg;
}