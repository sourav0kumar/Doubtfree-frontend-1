import axios from "axios"

export async function AddCourseService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`http://127.0.0.1:5000/addcourse`, formData, { headers });
    console.log(res);
    if (res.error) {
        console.log(res.data);
        msg = "Some Error occurred.";
    } else {
        msg = "Course Added";
    }
    return msg;
}