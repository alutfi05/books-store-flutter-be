import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editBook, detailBook } from "../../axios/bookAxios";
import { getCategories } from "../../axios/categoryAxios";
import { MdAddTask, MdCancel, MdOutlinePriceChange } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { BsCalendarDateFill, BsImages } from "react-icons/bs";

const EditBook = () => {
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
    const params = useParams();

    const getBookDetail = () => {
        const { id } = params;

        detailBook(id, localStorage.access_token, (result) => {
            setForm({
                bookTitle: result.bookTitle,
                bookSynopsis: result.bookSynopsis,
                bookShortDescription: result.bookShortDescription,
                bookPrice: result.bookPrice,
                bookSalePrice: result.bookSalePrice,
                stockStatus: result.stockStatus,
                category: result.category,
                bookImage: result.bookImage,
            });
        });
    };

    useEffect(() => {
        getBookDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editBook(id, form, localStorage.access_token);
        navigation("/books");
    };

    const api_img = "http://localhost:4000";

    return (
        <div>
            <div className="row mt-4">
                <div className="w-100 text-center my-3">
                    <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                        Edit a book
                    </h4>
                    <p className="medium">Something wrong? let's edited!</p>
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
                                value={form.bookTitle}
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
                            value={form.bookSynopsis}
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
                            value={form.bookShortDescription}
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
                                value={form.bookPrice}
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
                                value={form.bookSalePrice}
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
                            value={form.stockStatus}
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
                            value={form.category}
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
                        <label htmlFor="image">Book Image Now</label>
                        <br />
                        <img
                            src={form.bookImage ? api_img + form.bookImage : ""}
                            alt="You have selected new image to be uploaded!"
                            width={form.bookImage ? "100" : "100"}
                            height={form.bookImage ? "100" : "100"}
                        />
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

export default EditBook;
