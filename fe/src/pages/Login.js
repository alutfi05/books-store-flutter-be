import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BookStore from "../images/digital-bookstore-concept-free-vector.jpg";
import Register from "./Register";

const Login = (props) => {
    const { loginCbHandler } = props;

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigation = useNavigate();

    const loginUser = async () => {
        try {
            let result = await axios({
                method: "POST",
                url: `http://localhost:3000/api/admins/login`,
                data: form,
            });
            const access_token = result.data.access_token;
            localStorage.setItem("access_token", access_token);
            loginCbHandler(true);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const submitHandler = () => {
        loginUser();
        navigation("/home");
    };

    return (
        <>
            <div className="w-50 mx-auto mt-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <img
                            src={BookStore}
                            alt=""
                            style={{ width: "200px" }}
                            className="mt-3"
                        />
                        <h2 className="mt-3 fw-bold">
                            Welcome Back,{" "}
                            <span style={{ color: "var(--green)" }}>Admin</span>{" "}
                            !
                        </h2>
                        <p className="text-sm">
                            Enter your credentials to access admin dashboard.
                        </p>
                    </div>
                    <div className="w-75 mx-auto">
                        <div class="form-floating mb-3">
                            <input
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button
                            onClick={() => submitHandler()}
                            className="btn btn-success w-100 mb-3 shadow-sm"
                        >
                            Login
                        </button>

                        <div className="mb-3 text-center">
                            <p>
                                Don't have an account ?{" "}
                                <Link
                                    to="/admins/register"
                                    className="text-decoration-none text-primary"
                                >
                                    Create an account here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
