import axios from "axios"

export async function NewPasswordService(password, token) {
    let msg = "Link Expired!";
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await axios.post(`http://127.0.0.1:5000/new-password`, { password, token }, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        msg = res.data.message;
    }
    return msg;
}