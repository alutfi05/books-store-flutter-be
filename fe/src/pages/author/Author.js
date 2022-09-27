import React from "react";
import { Outlet } from "react-router-dom";

const Author = () => {
    return (
        <div>
            <div className="w-100">
                <div className="text-center">
                    <h3
                        className="text-shadow fs-1"
                        style={{ color: "var(--green)" }}
                    >
                        Authors
                    </h3>
                    <p className="medium">
                        Author from each books in this store
                    </p>
                    <hr className="border border-dark border-1 opacity-25" />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Author;
