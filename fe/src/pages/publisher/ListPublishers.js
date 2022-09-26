import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublishers, removePublisher } from "../../axios/publisherAxios";
import { ImUserPlus } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loading from "../../helpers/Loading";

const ListPublishers = () => {
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        getPublishers((result) => setPublishers(result));
    }, []);

    const deleteHandler = (id) => {
        removePublisher(id, localStorage.access_token);
    };

    return (
        <>
            <div className="mt-4 text-center">
                <Link to="/publishers/add" className="btn btn-sm btn-success">
                    <span className="me-2">
                        <ImUserPlus />
                    </span>
                    Add Publisher
                </Link>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="w-100 mt-4 d-flex flex-wrap justify-content-center">
                        {publishers.length > 0 ? (
                            publishers.map((publisher) => {
                                const { id, name } = publisher;
                                return (
                                    <div
                                        className="card me-1 shadow p-3 mb-5 bg-body rounded"
                                        style={{ width: "18rem" }}
                                        key={id}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title text-center mb-3 text-shadow">
                                                {name}
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <Link
                                                to={`/publishers/edit/${id}`}
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
                                                className="btn btn-sm btn-danger me-2"
                                            >
                                                <span className="me-2">
                                                    <RiDeleteBin5Fill />
                                                </span>
                                                Delete
                                            </button>
                                            <Link
                                                to={`/publishers/publisher/${id}`}
                                                className="btn btn-sm me-2 btn-dark"
                                            >
                                                <span>
                                                    <BsFillInfoCircleFill />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
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

export default ListPublishers;
