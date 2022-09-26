import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import {
    Admin,
    DetailAdmin,
    ListAdmins,
    ActionAdmin,
    Category,
    ListCategories,
    AddCategory,
    EditCategory,
    DetailCategory,
    Book,
    ListBooks,
    AddBook,
    EditBook,
    DetailBook,
    Author,
    ListAuthors,
    AddAuthor,
    EditAuthor,
    DetailAuthor,
    Publisher,
    ListPublishers,
    AddPublisher,
    EditPublisher,
    DetailPublisher,
} from "../pages";

const MainContent = () => {
    return (
        <div className="container">
            <Routes>
                <Route
                    activeClassName="active"
                    path="home"
                    element={<Home />}
                />
                <Route
                    activeClassName="active"
                    path="admins"
                    element={<Admin />}
                >
                    <Route path="" element={<ListAdmins />}></Route>
                    <Route path="register" element={<ActionAdmin />}></Route>
                    <Route path="">
                        <Route path=":id" element={<ActionAdmin />}></Route>
                    </Route>
                    <Route path="account">
                        <Route path=":id" element={<DetailAdmin />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="categories"
                    element={<Category />}
                >
                    <Route path="" element={<ListCategories />}></Route>
                    <Route path="" element={<AddCategory />}></Route>
                    <Route path="">
                        <Route path=":id" element={<EditCategory />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailCategory />}></Route>
                    </Route>
                </Route>
                <Route
                    exact
                    activeClassName="active"
                    path=""
                    element={<Book />}
                >
                    <Route path="" element={<ListBooks />}></Route>
                </Route>
                <Route activeClassName="active" path="books" element={<Book />}>
                    <Route path="" element={<ListBooks />}></Route>
                    <Route path="" element={<AddBook />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBook />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailBook />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="authors"
                    element={<Author />}
                >
                    <Route path="" element={<ListAuthors />}></Route>
                    <Route path="" element={<AddAuthor />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditAuthor />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailAuthor />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="publishers"
                    element={<Publisher />}
                >
                    <Route path="" element={<ListPublishers />}></Route>
                    <Route path="" element={<AddPublisher />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditPublisher />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailPublisher />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainContent;
