import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { MainContent, Navbar } from "./components";

import LoginPage from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    const [loginStatus, setLoginStatus] = useState(false);

    const loginCbHandler = (result) => {
        setLoginStatus(result);
    };

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setLoginStatus(true);
        } else {
            setLoginStatus(false);
        }
    }, [loginStatus]);

    return (
        <>
            <div className="container-fluid">
                {loginStatus ? (
                    <div>
                        <Navbar
                            loginStatus={loginStatus}
                            loginCbHandler={loginCbHandler}
                        />

                        <MainContent />
                    </div>
                ) : (
                    <LoginPage loginCbHandler={loginCbHandler} />
                    // <Register />
                )}
            </div>
        </>
    );
};

export default App;
