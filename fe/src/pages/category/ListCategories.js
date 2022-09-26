import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, removeCategory } from "../../axios/categoryAxios";
import Loading from "../../helpers/Loading";
import { BiCategoryAlt } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";

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
                    <div className="w-50 mx-auto">
                        {categories.length > 0 ? (
                            categories.map((category) => {
                                const { id, name } = category;
                                return (
                                    <ul className="list-group mb-3" key={id}>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>{name}</div>
                                            <span className="me-4">
                                                <Link
                                                    to={`/categories/detail/${id}`}
                                                    className="btn btn-sm me-2 btn-dark no-hover"
                                                >
                                                    <span>
                                                        <BsFillInfoCircleFill />
                                                    </span>
                                                </Link>
                                                <Link
                                                    to={`/categories/edit/${id}`}
                                                    className="btn btn-sm me-2 btn-warning"
                                                >
                                                    <span>
                                                        <MdModeEdit />
                                                    </span>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteHandler(+id)
                                                    }
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    <span>
                                                        <RiDeleteBin5Fill />
                                                    </span>
                                                </button>
                                            </span>
                                        </li>
                                    </ul>
                                );
                            })
                        ) : (
                            <Loading />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCategories;
