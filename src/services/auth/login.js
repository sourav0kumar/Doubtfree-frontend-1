import getuser from '../../actions/getuser';
import VERIFY_AUTH from '../../actions/verfiy';


export async function LoginService(email, password, dispatch) {
    // const { email, password, remembe } = values;
    let msg = "Invalid Crediationals";
    await fetch(`http://127.0.0.1:5000/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => response.json())
        .then(res => {
            // console.log(res);
            if (res.error == "Empty fields") {
                console.log(res);
                msg = "Empty fields";
            } else if (res.message == "User don't Exist.") {
                console.log(res);
                msg = "User doesn't Exist";
            } else {
                dispatch(getuser(res));
                dispatch(VERIFY_AUTH({ isLoggedIn: true }))
                msg = "Logged In";
            }
        })
        .catch(err => {
            console.log(err.message);
            msg = "Something went wrong";
        });
    return msg;
}