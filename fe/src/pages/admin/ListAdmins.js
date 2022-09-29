import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAdmins, deleteAdmin } from "../../axios/adminAxios";
import { FaUserEdit } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Loading from "../../helpers/Loading";

const ListAdmins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        getAdmins((result) => setAdmins(result));
    }, []);

    const deleteHandler = (id) => {
        deleteAdmin(id, localStorage.access_token);
    };

    return (
        <>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr className="table-success text-center">
                        <th scope="col">No</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Photo Profile</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.length > 0 ? (
                        admins.map((admin, index) => {
                            const { id, name, email, image } = admin;
                            const displayImage =
                                "http://localhost:3000/" + image;
                            return (
                                <tr key={id} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
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
                                            to={`/admins/account/${id}`}
                                            className="btn btn-sm me-2 btn-dark"
                                        >
                                            <span className="me-2">
                                                <BsFillInfoCircleFill />
                                            </span>
                                            Detail
                                        </Link>
                                        <Link
                                            to={`/admins/edit/${id}`}
                                            className="btn btn-sm me-2 btn-warning"
                                        >
                                            <span className="me-2">
                                                <MdModeEdit />
                                            </span>
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteHandler(+id)}
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
        </>
    );
};

export default ListAdmins;
