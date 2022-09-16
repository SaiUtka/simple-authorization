import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {setUser} from "../redux/slices/userSlice";
import {Form} from "./Form";

function Login() {

    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    token: user.accessToken,
                    email: user.email

                }));
                navigate('/');
            })
            .catch(alert);
    }

    return (

        <Form title='Login To Your Account' btn={'login'} handleClick={handleLogin}/>

    );

}

export {Login};