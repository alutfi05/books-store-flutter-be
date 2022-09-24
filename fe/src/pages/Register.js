import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../axios/adminAxios";
import { Link } from "react-router-dom";
import BookStore from "../images/digital-bookstore-concept-free-vector.jpg";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        image: {},
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        register(form);
        navigation("/");
    };

    return (
        <>
            <div className="w-50 mx-auto">
                <div className="container">
                    <div className="text-center mb-5">
                        <img
                            src={BookStore}
                            alt=""
                            style={{ width: "200px" }}
                            className="mt-3"
                        />
                        <h2 className="mt-3">Create an account !</h2>
                        <p className="text-sm">
                            Create your credentials to login and access admin
                            dashboard.
                        </p>
                    </div>
                    <div className="w-75 mx-auto">
                        <div class="form-floating mb-3">
                            <input
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name"
                            />
                            <label for="floatingInput">Full Name</label>
                        </div>
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
                        <div class="mb-3">
                            <label for="formFile" class="form-label">
                                Profile Picture
                            </label>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        image: e.target.files[0],
                                    })
                                }
                                class="form-control"
                                type="file"
                                id="formFile"
                            />
                        </div>

                        <button
                            onClick={() => submitHandler()}
                            className="btn btn-success w-100 mb-3 shadow-sm"
                        >
                            Register
                        </button>

                        <div className="mb-3 text-center">
                            <p>
                                Already have an account ?{" "}
                                <Link
                                    to="/"
                                    className="text-decoration-none text-primary"
                                >
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
