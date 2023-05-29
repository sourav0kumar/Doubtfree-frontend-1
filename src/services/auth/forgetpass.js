import axios from "axios"

export async function ForgetPasswordService(email) {
    let msg = "Try Again sometimes later!";
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await axios.post(`http://127.0.0.1:5000/resetPassword`, { email }, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        msg = res.data.message;
    }
    return msg;
}