import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editBook, detailBook } from "../../axios/bookAxios";
import { getCategories } from "../../axios/categoryAxios";
import { getAuthors } from "../../axios/authorAxios";
import { getPublishers } from "../../axios/publisherAxios";
import { MdAddTask, MdCancel, MdOutlinePriceChange } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { BsCalendarDateFill, BsImages } from "react-icons/bs";

const EditBook = () => {
    const [form, setForm] = useState({
        title: "",
        synopsis: "",
        publicationYear: "",
        price: 0,
        stock: 0,
        image: {},
        categoryId: "",
        authorId: "",
        publisherId: "",
    });

    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        getCategories((result) => setCategories(result));
    }, []);

    useEffect(() => {
        getAuthors((result) => setAuthors(result));
    }, []);

    useEffect(() => {
        getPublishers((result) => setPublishers(result));
    }, []);

    const navigation = useNavigate();
    const params = useParams();

    const getBookDetail = () => {
        const { id } = params;

        detailBook(+id, localStorage.access_token, (result) => {
            setForm({
                title: result.title,
                synopsis: result.synopsis,
                publicationYear: result.publicationYear,
                price: result.price,
                stock: result.stock,
                image: result.image,
                categoryId: result.categoryId,
                authorId: result.authorId,
                publisherId: result.publisherId,
            });
        });
    };

    useEffect(() => {
        getBookDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editBook(+id, form, localStorage.access_token);
        navigation("/books");
    };
    const api_img = "http://localhost:3000/";

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
                                value={form.title}
                                onChange={(e) =>
                                    setForm({ ...form, title: e.target.value })
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
                        <label htmlFor="sysnopsis" className="form-label">
                            Synopsis
                        </label>
                        <textarea
                            value={form.synopsis}
                            onChange={(e) =>
                                setForm({ ...form, synopsis: e.target.value })
                            }
                            className="form-control"
                            id="sysnopsis"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="publicationYear" className="form-label">
                            Publication Year
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <BsCalendarDateFill />
                            </span>
                            <input
                                value={form.publicationYear}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        publicationYear: e.target.value,
                                    })
                                }
                                id="publicationYear"
                                type="date"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Price
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <MdOutlinePriceChange />
                            </span>
                            <input
                                value={form.price}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        price: e.target.value,
                                    })
                                }
                                id="price"
                                type="number"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Stock
                        </label>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <TbSortAscendingNumbers />
                            </span>
                            <input
                                value={form.stock}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        stock: e.target.value,
                                    })
                                }
                                id="stock"
                                type="number"
                                className="form-control"
                                required
                            />
                        </div>
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
                                        image: e.target.files[0],
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
                            src={form.image ? api_img + form.image : ""}
                            alt="You have selected new image to be uploaded!"
                            width={form.image ? "100" : "100"}
                            height={form.image ? "100" : "100"}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">
                            Category
                        </label>
                        <select
                            value={form.categoryId}
                            onChange={(e) =>
                                setForm({ ...form, categoryId: e.target.value })
                            }
                            id="categoryId"
                            className="form-select"
                        >
                            <option defaultValue="">
                                --- Category Book ---
                            </option>
                            {categories.map((category, i) => {
                                const { id, name } = category;
                                return (
                                    <option value={id} key={id}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorId" className="form-label">
                            Author
                        </label>
                        <select
                            value={form.authorId}
                            onChange={(e) =>
                                setForm({ ...form, authorId: e.target.value })
                            }
                            id="authorId"
                            className="form-select"
                        >
                            <option defaultValue="">--- Author ---</option>
                            {authors.map((author, i) => {
                                const { id, name } = author;
                                return (
                                    <option value={id} key={id}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="publisherId" className="form-label">
                            Publisher
                        </label>
                        <select
                            value={form.publisherId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    publisherId: e.target.value,
                                })
                            }
                            id="publisherId"
                            className="form-select"
                        >
                            <option defaultValue="">--- Publisher ---</option>
                            {publishers.map((publisher, i) => {
                                const { id, name } = publisher;
                                return (
                                    <option value={id} key={id}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
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
