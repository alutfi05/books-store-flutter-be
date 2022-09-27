import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/authors";

const getAuthors = async (cb) => {
    try {
        let authors = await axios({
            method: "GET",
            url: URL,
        });
        cb(authors.data);
    } catch (error) {
        console.log(error);
    }
};

const addAuthor = async (author, access_token) => {
    try {
        let newAuthor = await axios({
            method: "POST",
            url: URL + "/add",
            data: author,
            headers: {
                "content-type": "multipart/form-data",
                auth: access_token,
            },
        });

        Swal.fire("Add Author!", "Author has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editAuthor = async (id, author, access_token) => {
    try {
        let updateAuthor = await axios({
            method: "PUT",
            url: URL + "/edit/" + id,
            data: author,
            headers: {
                "content-type": "multipart/form-data",
                auth: access_token,
            },
        });

        Swal.fire(
            `Edit Author!`,
            `Author with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeAuthor = async (id, access_token) => {
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
                let deleteAuthor = await axios({
                    method: "DELETE",
                    url: URL + "/" + id,
                    headers: {
                        auth: access_token,
                    },
                });
                Swal.fire(
                    "Deleted!",
                    `Author with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });

        setTimeout(() => {
            window.location.href = "/authors";
        }, 3000);
    } catch (error) {
        console.log(error);
    }
};

const detailAuthor = async (id, access_token, cb) => {
    try {
        let findAuthor = await axios({
            method: "GET",
            url: URL + "/author/" + id,
            headers: {
                "content-type": "multipart/form-data",
                auth: access_token,
            },
        });

        cb(findAuthor.data);
    } catch (error) {
        console.log(error);
    }
};

export { getAuthors, addAuthor, editAuthor, removeAuthor, detailAuthor };
