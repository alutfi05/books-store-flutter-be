import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, removeCategory } from "../../axios/categoryAxios";
import Loading from "../../helpers/Loading";
import { BiCategoryAlt } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories((result) => setCategories(result));
    }, []);

    const deleteHandler = (id) => {
        removeCategory(id, localStorage.access_token);
    };

    return (
        <>
            <div className="w-100">
                <div className="mt-4 text-center">
                    <Link
                        to="/categories/add"
                        className="btn btn-sm btn-success mb-4"
                    >
                        <span className="me-2">
                            <BiCategoryAlt />
                        </span>
                        Add Category
                    </Link>
                    <div>
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr className="table-success text-center">
                                    <th scope="col">No</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Category Image</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.length > 0 ? (
                                    categories.map((category, index) => {
                                        const {
                                            categoryId,
                                            categoryName,
                                            categoryImage,
                                        } = category;
                                        const displayImage =
                                            "http://localhost:4000" +
                                            categoryImage;
                                        return (
                                            <tr key={categoryId}>
                                                <td>{index + 1}</td>
                                                <td>{categoryName}</td>
                                                <td>
                                                    <img
                                                        src={displayImage}
                                                        alt=""
                                                        style={{
                                                            width: "120px",
                                                            height: "100px",
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/categories/edit/${categoryId}`}
                                                        className="btn btn-sm me-2 btn-warning"
                                                    >
                                                        <MdModeEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteHandler(
                                                                categoryId
                                                            )
                                                        }
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        <RiDeleteBin5Fill />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <Loading />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCategories;
