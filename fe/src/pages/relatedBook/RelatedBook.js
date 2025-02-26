import React from "react";
import { Outlet } from "react-router-dom";

const RelatedBook = () => {
    return (
        <div className="w-100">
            <div className="text-center">
                <h3
                    className="text-shadow fs-1 fw-bold"
                    style={{ color: "var(--green)" }}
                >
                    Related Book
                </h3>
                <p className="medium">
                    Related book for recommend another book in book details
                </p>
                <hr className="border border-dark border-1 opacity-25" />
            </div>
            <Outlet />
        </div>
    );
};

export default RelatedBook;
