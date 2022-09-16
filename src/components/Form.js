import {useState} from "react";

import '../styles/form-styles.css';

function Form({btn, handleClick, title}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div className={'login-box'}>

            <h2>{title}</h2>

            <form>
                <div className={'user-box'}>
                    <input type="email"
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>

                <div className={'user-box'}>
                    <input type="password"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>

                <div className={'btn'}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleClick(email, password);
                    }}>
                        {btn}
                    </button>
                </div>
            </form>
        </div>
    );

}

export {Form};