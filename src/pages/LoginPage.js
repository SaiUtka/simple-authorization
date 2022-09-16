import {Link} from "react-router-dom";
import {Login} from "../components/Login";

function LoginPage() {
    return (
        <div className={'wrapper'}>
            <Login/>
            <Link to={'/registration'}>Don’t have an account? <span>sign up</span></Link>
        </div>
    );

}

export {LoginPage};