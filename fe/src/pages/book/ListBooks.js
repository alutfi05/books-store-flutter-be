import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, removeBook } from "../../axios/bookAxios";
import { RiHealthBookFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
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
                            <th scope="col">Short Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sale Price</th>
                            <th scope="col">Stock Status</th>
                            <th scope="col">Category</th>
                            <th scope="col">Book Image</th>
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
                                        book.bookTitle
                                            .toLowerCase()
                                            .includes(query.toLowerCase())
                                    ) {
                                        return book;
                                    }
                                })
                                .map((book, index) => {
                                    console.log(book);
                                    const {
                                        bookId,
                                        bookTitle,
                                        bookSynopsis,
                                        bookShortDescription,
                                        stockStatus,
                                        bookPrice,
                                        bookSalePrice,
                                        bookImage,
                                    } = book;
                                    const displayImage =
                                        "http://localhost:4000" + bookImage;
                                    return (
                                        <tr key={bookId}>
                                            <td>{index + 1}</td>
                                            <td>{bookTitle}</td>
                                            <td>{bookSynopsis}</td>
                                            <td>{bookShortDescription}</td>
                                            <td>{rupiah(bookPrice)}</td>
                                            <td>{rupiah(bookSalePrice)}</td>
                                            <td>{stockStatus}</td>
                                            <td>
                                                {book.category.categoryName}
                                            </td>
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
                                            <td>
                                                <Link
                                                    to={`/books/edit/${bookId}`}
                                                    className="btn btn-sm me-2 btn-warning"
                                                >
                                                    <MdModeEdit />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteHandler(bookId)
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
