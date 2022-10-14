import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = (props) => {
    const navigation = useNavigate();

    const { loginStatus, loginCbHandler } = props;

    const loginHandler = () => {
        loginCbHandler(true);
    };

    const logoutHandler = () => {
        localStorage.clear();
        loginCbHandler(false);
        navigation("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg shadow-sm p-3 mb-5 bg-body rounded">
                <div className="container">
                    <Link
                        className="navbar-brand font-logo font-logo me-5 lead fw-bolder"
                        to="/home"
                        style={{ fontSize: "28px" }}
                    >
                        Book Store
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fw-semibold">
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/books">
                                    Books List
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/categories">
                                    Category
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/sliders">
                                    Sliders
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/relatedBooks">
                                    Related Books
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/admins">
                                    Admin
                                </Link>
                            </li>
                            <li className="nav-item">
                                {loginStatus ? (
                                    <a
                                        className="nav-link btn btn-danger text-white"
                                        href=""
                                        onClick={() => logoutHandler()}
                                    >
                                        <span className="me-2">
                                            <HiOutlineLogout />
                                        </span>
                                        Logout
                                    </a>
                                ) : (
                                    <a
                                        className="nav-link"
                                        href="#"
                                        onClick={() => loginHandler()}
                                    >
                                        Login
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
