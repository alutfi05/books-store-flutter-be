import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editCategory, detailCategory } from "../../axios/categoryAxios";
import { MdAddTask, MdCancel, MdCategory } from "react-icons/md";
import { BsImages } from "react-icons/bs";

const AddCategory = () => {
    const [form, setForm] = useState({
        categoryName: "",
        categoryImage: {},
    });

    const navigation = useNavigate();
    const params = useParams();

    const getCategoryDetail = () => {
        const { id } = params;

        detailCategory(id, localStorage.access_token, (result) => {
            setForm({
                categoryName: result.categoryName,
                categoryImage: result.categoryImage,
            });
        });
    };

    useEffect(() => {
        getCategoryDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editCategory(id, form, localStorage.access_token);
        navigation("/categories");
    };

    const api_img = "http://localhost:4000";

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Edit a category for books
                </h4>
                <p className="medium">Something wrong? let's edited!</p>
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
                            value={form.categoryName}
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
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Category Image
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <BsImages />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    categoryImage: e.target.files[0],
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
                        src={
                            form.categoryImage
                                ? api_img + form.categoryImage
                                : ""
                        }
                        alt="You have selected new image to be uploaded!"
                        width={form.categoryImage ? "100" : "100"}
                        height={form.categoryImage ? "100" : "100"}
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
                        Edit
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
