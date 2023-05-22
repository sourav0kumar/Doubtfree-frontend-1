import getuser from '../../actions/getuser';
import VERIFY_AUTH from '../../actions/verfiy';



export async function RegisterUserService(values, dispatch) {
    // const { email, password, remembe } = values;
    let msg = "Invalid Crediationals";
    await fetch(`http://127.0.0.1:5000/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nickname: values.nickname,
                email: values.email,
                password: values.password,
                residence: "viyfvkhv",
                number: values.number,
                donation: values.donation,
                website: values.website,
            })
        })
        .then(response => response.json())
        .then(res => {
            // console.log(res);
            if (res.error == "Empty fields") {
                console.log(res);
                msg = "Empty fields";
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