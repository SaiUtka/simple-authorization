import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {deleteUser} from "../redux/slices/userSlice";
import '../styles/mainPage-styles.css'

function MainPage() {

    const isAuth = useSelector(state => state.userReducer.id);
    const email = useSelector(state => state.userReducer.email);

    const dispatch = useDispatch();

    return (
        <div className={'wrapper'}>
            {
                isAuth ? (
                    <div className={'main__welcome'}>
                        <h1>Welcome</h1>
                        <button onClick={() => dispatch(deleteUser())}>
                            log out from <span>{email}</span>
                        </button>
                    </div>
                    )
                    : (
                        <div className={'main__welcome'}>
                            <Link to={'/login'}> login</Link>
                            <Link to={'/registration'}> sign up</Link>
                        </div>
                    )
            }

        </div>
    );

}

export {MainPage};