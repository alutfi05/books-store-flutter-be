import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/api/relatedBook";

const addRelatedBook = async (relatedBook, access_token) => {
    try {
        let newRelatedBook = await axios({
            method: "POST",
            url: URL,
            data: relatedBook,
            headers: {
                auth: access_token,
            },
        });

        Swal.fire(
            "Add Related Book!",
            "Related Book has been added.",
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeRelatedBook = async (id, access_token) => {
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
                let deleteRelatedBook = await axios({
                    method: "DELETE",
                    url: URL + "/" + id,
                    headers: {
                        auth: access_token,
                    },
                });
                Swal.fire(
                    "Deleted!",
                    `Related Book with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });

        setTimeout(() => {
            window.location.href = "/books";
        }, 3000);
    } catch (error) {
        console.log(error);
    }
};

export { addRelatedBook, removeRelatedBook };
