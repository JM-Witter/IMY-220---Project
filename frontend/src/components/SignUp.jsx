import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const nav = useNavigate();

    const signup = async () => {
        if (username.trim() == "" || password.trim() == "" || email.trim() == "") {
            return;
        }

        if (!email.includes("@")) {
            return;
        }

        if (username.length < 3) {
            console.log("Username is too short");
            return;
        }

        if (password.length < 6) {
            console.log("Password is too short");
            return;
        }

        try {
            const resp = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const data = await resp.json();
            
            if (data.message == "Created Account") {
                console.log("Signing in");
                nav("/Home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className="splash-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" onClick={signup} className="btn btn-primary">Create Account</button>

            </form>
        </>
    );
}

export default SignUp;