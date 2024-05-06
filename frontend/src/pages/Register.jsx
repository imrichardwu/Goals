import {useEffect, useState} from "react";
import {FaUser} from "react-icons/fa";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const {name, email, password, password2} = formData;

    const onchange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create Your Account</p>
                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                onChange={onchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={onchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password2"
                                name="password2"
                                value={password2}
                                placeholder="Confirm your password"
                                onChange={onchange}
                            />
                        </div>
                        <button type="submit" className="btn btn-block">
                            Register
                        </button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default Register;
