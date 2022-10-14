import React from "react";
import { Outlet } from "react-router-dom";

const Slider = () => {
    return (
        <div className="w-100">
            <div className="text-center">
                <h3
                    className="text-shadow fs-1 fw-bold"
                    style={{ color: "var(--green)" }}
                >
                    Sliders
                </h3>
                <p className="medium">Sliders Promo for book in this store</p>
                <hr className="border border-dark border-1 opacity-25" />
            </div>
            <Outlet />
        </div>
    );
};

export default Slider;
