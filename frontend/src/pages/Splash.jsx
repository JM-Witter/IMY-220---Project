import React, { useState } from 'react';

function Splash() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        console.log("Loggin in: ", username, password);
    }

    function signup() {
        console.log("Signing in: ", username, password);
    }

    return (
        <div className="splash">
            <div className="splash-card">
                <div className="logo">

                </div>

                <h1 className="splash-title">TidBit</h1>

                <form className="splash-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={login} className="btn btn-primary">Login</button>
                    <button type="submit" onClick={signup} className="btn btn-secondary">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Splash;