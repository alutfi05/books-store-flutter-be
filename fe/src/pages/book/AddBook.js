import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addBook } from "../../axios/bookAxios";
import { getCategories } from "../../axios/categoryAxios";
import { MdAddTask, MdCancel, MdOutlinePriceChange } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { BsImages } from "react-icons/bs";

const AddBook = () => {
    const [form, setForm] = useState({
        bookTitle: "",
        bookSynopsis: "",
        bookShortDescription: "",
        bookPrice: 0,
        bookSalePrice: 0,
        stockStatus: "",
        category: "",
        bookImage: {},
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories((result) => setCategories(result));
    }, []);

    const navigation = useNavigate();

    const submitHandler = () => {
        addBook(form, localStorage.access_token);
        navigation("/books");
    };

    return (
        <div>
            <div className="row mt-4">
                <div className="w-100 text-center my-3">
                    <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                        Create a book
                    </h4>
                    <p className="medium">Let's create a book</p>
                </div>
                <div className="w-50 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Book title
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <SiBookstack />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        bookTitle: e.target.value,
                                    })
                                }
                                id="title"
                                type="text"
                                className="form-control"
                                required
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="synopsis" className="form-label">
                            Synopsis
                        </label>
                        <textarea
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    bookSynopsis: e.target.value,
                                })
                            }
                            className="form-control"
                            id="synopsis"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="shortDescription"
                            className="form-label"
                        >
                            Short Description
                        </label>
                        <textarea
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    bookShortDescription: e.target.value,
                                })
                            }
                            className="form-control"
                            id="shortDescription"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Book Price
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <MdOutlinePriceChange />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        bookPrice: e.target.value,
                                    })
                                }
                                id="price"
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salePrice" className="form-label">
                            Book Sale Price
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <MdOutlinePriceChange />
                            </span>
                            <input
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        bookSalePrice: e.target.value,
                                    })
                                }
                                id="price"
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stockStatus" className="form-label">
                            Stock Status
                        </label>
                        <select
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    stockStatus: e.target.value,
                                })
                            }
                            id="categoryId"
                            className="form-select"
                        >
                            <option defaultValue="">
                                --- Stock Status ---
                            </option>
                            <option value="IN" key="IN">
                                IN
                            </option>
                            <option value="OUT" key="OUT">
                                OUT
                            </option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">
                            Category
                        </label>
                        <select
                            onChange={(e) =>
                                setForm({ ...form, category: e.target.value })
                            }
                            id="categoryId"
                            className="form-select"
                        >
                            <option defaultValue="">
                                --- Category Book ---
                            </option>
                            {categories.map((category) => {
                                const { categoryId, categoryName } = category;

                                return (
                                    <option value={categoryId} key={categoryId}>
                                        {categoryName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Book Cover Image
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
                                        bookImage: e.target.files[0],
                                    })
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

export default AddBook;
