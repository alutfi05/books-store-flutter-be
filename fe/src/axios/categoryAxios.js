import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/api/category";

const getCategories = async (cb) => {
    try {
        let categories = await axios({
            method: "GET",
            url: URL,
        });

        cb(categories.data.data);
    } catch (error) {
        console.log(error);
    }
};

const addCategory = async (category, access_token) => {
    try {
        let newCategory = await axios({
            method: "POST",
            url: URL,
            data: category,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        Swal.fire("Add Category!", "Category has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editCategory = async (id, category, access_token) => {
    try {
        let updateCategory = await axios({
            method: "PUT",
            url: URL + "/" + id,
            data: category,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        Swal.fire(
            `Edit Category!`,
            `Category with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeCategory = async (id, access_token) => {
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleteCategory = await axios({
                    method: "DELETE",
                    url: URL + "/" + id,
                    headers: {
                        auth: access_token,
                        "content-type": "multipart/form-data",
                    },
                });
                Swal.fire(
                    "Deleted!",
                    `Category with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });

        setTimeout(() => {
            window.location.href = "/categories";
        }, 3000);
    } catch (error) {
        console.log(error);
    }
};

const detailCategory = async (id, access_token, cb) => {
    try {
        let findCategory = await axios({
            method: "GET",
            url: URL + "/" + id,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        cb(findCategory.data.data);
    } catch (error) {
        console.log(error);
    }
};

export {
    getCategories,
    addCategory,
    editCategory,
    removeCategory,
    detailCategory,
};
