import React from "react";
import { Outlet } from "react-router-dom";

const Category = () => {
    return (
        <div className="w-100">
            <div className="text-center">
                <h3 className="text-shadow fs-1 font-logo">Categories List</h3>
                <p className="medium">Categories book in this store</p>
                <hr className="border border-dark border-1 opacity-25" />
            </div>
            <Outlet />
        </div>
    );
};

export default Category;
