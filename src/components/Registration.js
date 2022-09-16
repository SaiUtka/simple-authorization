import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Form} from "./Form";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const auth = getAuth();

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
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
        <Form title='Registration' handleClick={handleRegister} btn={'sign up'}/>
    );

}

export {Registration};