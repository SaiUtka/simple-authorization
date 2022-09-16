import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Form} from "./Form";
import {setUser} from "../redux/slices/userSlice";

function Registration() {

    const dispatch = useDispatch();
    const auth = getAuth();

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    token: user.accessToken,
                    email: user.email

                }));
            })
            .catch(alert);
    }
    
    return (
        <Form title='Registration' handleClick={handleRegister} btn={'sign up'}/>
    );

}

export {Registration};