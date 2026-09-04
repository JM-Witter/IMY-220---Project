import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    const login = async () => {
        // console.log("Loggin in: ", username, password);

        try {
            const resp = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await resp.json();
            
            if (data.message == "Login") {
                console.log("Loggin in");
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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" onClick={login} className="btn btn-primary">Login</button>

            </form>
        </>
    );
}

export default Login;