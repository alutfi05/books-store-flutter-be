import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthors, removeAuthor } from "../../axios/authorAxios";
import { BsBook } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loading from "../../helpers/Loading";

const ListAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors((result) => setAuthors(result));
    }, []);

    const deleteHandler = (id) => {
        removeAuthor(id, localStorage.access_token);
    };

    return (
        <>
            <div className="my-4 text-center">
                <Link to="/authors/add" className="btn btn-sm btn-success">
                    <span className="me-2">
                        <FaUserEdit />
                    </span>
                    Add Author
                </Link>
            </div>
            <div>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr className="table-success text-center">
                            <th scope="col">No</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">City</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.length > 0 ? (
                            authors.map((author, index) => {
                                const { id, name, dateOfBirth, city, image } =
                                    author;
                                const displayImage =
                                    "http://localhost:3000/" + image;
                                return (
                                    <tr key={id} className="text-center">
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>
                                            {new Date(
                                                dateOfBirth
                                            ).getFullYear()}{" "}
                                            -{" "}
                                            {new Date(dateOfBirth).getMonth() +
                                                1}{" "}
                                            - {new Date(dateOfBirth).getDate()}
                                        </td>
                                        <td>{city}</td>
                                        <td>
                                            <img
                                                src={displayImage}
                                                alt=""
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <Link
                                                to={`/authors/detail/${id}`}
                                                className="btn btn-sm me-2 btn-dark"
                                            >
                                                <span className="me-2">
                                                    <BsBook />
                                                </span>
                                                Detail
                                            </Link>
                                            <Link
                                                to={`/authors/edit/${id}`}
                                                className="btn btn-sm me-2 btn-warning"
                                            >
                                                <span className="me-2">
                                                    <MdModeEdit />
                                                </span>
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteHandler(+id)
                                                }
                                                className="btn btn-sm btn-danger"
                                            >
                                                <span className="me-2">
                                                    <RiDeleteBin5Fill />
                                                </span>
                                                Delete
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
        </>
    );
};

export default ListAuthors;
