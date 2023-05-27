import axios from "axios";
import getcourses from '../../actions/getcourses';


export async function GetAllCourseService(dispatch) {
    const headers = {
        'Content-type': "Application/json"
    }
    const res = await axios.get(`http://127.0.0.1:5000/courses/all`, { headers });
    console.log(res);
    if (res.error) {
        console.log(res.data);
    } else {
        console.log(res)
        dispatch(getcourses(res.data));
    }
}