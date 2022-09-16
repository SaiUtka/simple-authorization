import {Link} from "react-router-dom";

import {Registration} from "../components/Registration";

function RegistrationPage() {
    return (
        <div className={'wrapper'}>
            <Registration/>
            <Link to={'/login'}>Have an account? <span>login</span> </Link>
        </div>
    );

}

export {RegistrationPage};