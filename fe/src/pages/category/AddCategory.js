import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addCategory } from "../../axios/categoryAxios";
import { MdAddTask, MdCancel, MdCategory } from "react-icons/md";
import { BsImages } from "react-icons/bs";

const AddCategory = () => {
    const [form, setForm] = useState({
        categoryName: "",
        categoryImage: {},
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        addCategory(form, localStorage.access_token);
        navigation("/categories");
    };
    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Create a category for books
                </h4>
                <p className="medium">Let's fill this category name</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                        Category name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <MdCategory />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    categoryName: e.target.value,
                                })
                            }
                            id="categoryName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryImage" className="form-label">
                            Category Image
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <BsImages />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        categoryImage: e.target.files[0],
                                    })
                                }
                                id="categoryImage"
                                type="file"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button
                        onClick={() => submitHandler()}
                        className="btn btn-sm btn-primary"
                    >
                        <span className="me-2">
                            <MdAddTask />
                        </span>
                        Submit
                    </button>
                    <Link
                        to="/categories"
                        className="btn btn-sm btn-outline-danger ms-2"
                    >
                        <span className="me-2">
                            <MdCancel />
                        </span>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;
