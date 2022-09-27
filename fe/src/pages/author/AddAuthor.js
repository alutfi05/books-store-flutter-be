import React, { useState } from "react";
import { addAuthor } from "../../axios/authorAxios";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAddTask, MdCancel, MdPhoto } from "react-icons/md";

const AddAuthor = () => {
    const [form, setForm] = useState({
        name: "",
        dateOfBirth: new Date(),
        city: "",
        image: {},
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        addAuthor(form, localStorage.access_token);
        navigation("/authors");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Add author
                </h4>
                <p className="medium">Let's get started with us</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">
                        Author name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FaUserEdit />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            id="authorName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                        Date Of Birth
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <BsCalendarDateFill />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    dateOfBirth: e.target.value,
                                })
                            }
                            id="dateOfBirth"
                            type="date"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <GiModernCity />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, city: e.target.value })
                            }
                            id="city"
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Author Image
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <MdPhoto />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, image: e.target.files[0] })
                            }
                            id="image"
                            type="file"
                            className="form-control"
                            required
                        />
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
                        to="/authors"
                        className="btn btn-sm ms-2 btn-outline-danger"
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

export default AddAuthor;
