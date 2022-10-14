import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components";

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
    Slider,
    AddSlider,
    EditSlider,
    ListSliders,
    DetailSlider,
    AddRelatedBook,
    RelatedBook,
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
                    <Route path="edit">
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
                    <Route path="add" element={<AddCategory />}></Route>
                    <Route path="edit">
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
                    <Route path="add" element={<AddBook />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBook />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailBook />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="sliders"
                    element={<Slider />}
                >
                    <Route path="" element={<ListSliders />}></Route>
                    <Route path="add" element={<AddSlider />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditSlider />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailSlider />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="relatedBooks"
                    element={<RelatedBook />}
                >
                    <Route path="" element={<AddRelatedBook />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainContent;
