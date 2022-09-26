import React, { useState } from "react";
import { addPublisher } from "../../axios/publisherAxios";
import { Link, useNavigate } from "react-router-dom";
import { ImOffice } from "react-icons/im";
import { MdAddTask, MdCancel } from "react-icons/md";

const AddPublisher = () => {
    const [form, setForm] = useState({
        name: "",
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        addPublisher(form, localStorage.access_token);
        navigation("/publishers");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Create a publisher
                </h4>
                <p className="medium">Let's get started with us</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="publisherName" className="form-label">
                        Publisher name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <ImOffice />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            id="publisherName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
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
                        to="/publishers"
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

export default AddPublisher;
