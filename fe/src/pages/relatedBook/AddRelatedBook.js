import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addRelatedBook } from "../../axios/relatedBookAxios";
import {
    MdAddTask,
    MdCancel,
    MdOutlineDriveFileRenameOutline,
} from "react-icons/md";

import { TbTournament } from "react-icons/tb";

const AddRelatedBook = () => {
    const [form, setForm] = useState({
        book: "",
        relatedBook: "",
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        addRelatedBook(form, localStorage.access_token);
        navigation("/books");
    };

    return (
        <div>
            <div className="row mt-4">
                <div className="w-100 text-center my-3">
                    <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                        Create a relation for book
                    </h4>
                    <p className="medium">Let's relation for a book</p>
                </div>
                <div className="w-50 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="bookId" className="form-label">
                            Book Id
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <MdOutlineDriveFileRenameOutline />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        book: e.target.value,
                                    })
                                }
                                id="bookId"
                                type="text"
                                className="form-control"
                                required
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="relationBook" className="form-label">
                            Relation with book Id
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <TbTournament />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        relatedBook: e.target.value,
                                    })
                                }
                                id="relationBook"
                                type="text"
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
                            to="/books"
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
        </div>
    );
};

export default AddRelatedBook;
