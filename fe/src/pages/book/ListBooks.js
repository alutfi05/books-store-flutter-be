import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, removeBook } from "../../axios/bookAxios";
import { RiHealthBookFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Loading from "../../helpers/Loading";
import rupiah from "../../helpers/RupiahFormatter";

const ListBooks = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getBooks((result) => setBooks(result));
    }, []);

    const deleteHandler = (id) => {
        removeBook(id, localStorage.access_token);
    };
    return (
        <>
            <div className="w-50 mx-auto mt-4">
                <form className="d-flex" role="search">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className="form-control me-2 rounded-pill shadow p-3 mb-3 bg-body rounded"
                        type="search"
                        placeholder="Search title book ...."
                        aria-label="Search"
                    />
                </form>
            </div>
            <div className="my-3 text-center">
                <Link to="/books/add" className="btn btn-sm btn-success">
                    <span className="me-2">
                        <RiHealthBookFill />
                    </span>
                    Add Book
                </Link>
            </div>
            <div>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr className="table-success text-center">
                            <th scope="col">No</th>
                            <th scope="col">Book Title</th>
                            <th scope="col">Synopsis</th>
                            <th scope="col">Publication Year</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Image</th>
                            <th scope="col">Author</th>
                            <th scope="col">Category</th>
                            <th scope="col">Publisher</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books
                                .filter((book) => {
                                    if (query === "") {
                                        return book;
                                    } else if (
                                        book.title
                                            .toLowerCase()
                                            .includes(query.toLowerCase())
                                    ) {
                                        return book;
                                    }
                                })
                                .map((book, index) => {
                                    console.log(book);
                                    const {
                                        id,
                                        title,
                                        synopsis,
                                        publicationYear,
                                        stock,
                                        price,
                                        image,
                                        author,
                                        category,
                                        publisher,
                                    } = book;
                                    const displayImage =
                                        "http://localhost:3000/" + image;
                                    return (
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{title}</td>
                                            <td>{synopsis}</td>
                                            <td>
                                                {new Date(
                                                    publicationYear
                                                ).getFullYear()}{" "}
                                                -{" "}
                                                {new Date(
                                                    publicationYear
                                                ).getMonth() + 1}{" "}
                                                -{" "}
                                                {new Date(
                                                    publicationYear
                                                ).getDate()}
                                            </td>
                                            <td>{rupiah(price)}</td>
                                            <td>{stock} pcs</td>
                                            <td>
                                                <img
                                                    src={displayImage}
                                                    alt=""
                                                    style={{
                                                        width: "100px",
                                                        height: "150px",
                                                    }}
                                                />
                                            </td>
                                            <td>{author.name}</td>
                                            <td>{category.name}</td>
                                            <td>{publisher.name}</td>
                                            <td>
                                                <Link
                                                    to={`/books/detail/${id}`}
                                                    className="btn btn-sm me-2 btn-dark"
                                                >
                                                    <BsFillInfoCircleFill />
                                                </Link>
                                                <Link
                                                    to={`/books/edit/${id}`}
                                                    className="btn btn-sm me-2 btn-warning"
                                                >
                                                    <MdModeEdit />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteHandler(+id)
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
        </>
    );
};

export default ListBooks;
