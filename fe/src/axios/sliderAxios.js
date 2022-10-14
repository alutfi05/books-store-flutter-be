import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/api/slider";

const getSliders = async (cb) => {
    try {
        let sliders = await axios({
            method: "GET",
            url: URL,
        });

        cb(sliders.data.data);
    } catch (error) {
        console.log(error);
    }
};

const addSlider = async (slider, access_token) => {
    try {
        let newSlider = await axios({
            method: "POST",
            url: URL,
            data: slider,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        Swal.fire("Add Slider!", "Slider has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editSlider = async (id, slider, access_token) => {
    try {
        let updateSlider = await axios({
            method: "PUT",
            url: URL + "/" + id,
            data: slider,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        Swal.fire(
            `Edit Slider!`,
            `Slider with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeSlider = async (id, access_token) => {
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
                let deleteSlider = await axios({
                    method: "DELETE",
                    url: URL + "/" + id,
                    headers: {
                        auth: access_token,
                        "content-type": "multipart/form-data",
                    },
                });
                Swal.fire(
                    "Deleted!",
                    `Silder with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });

        setTimeout(() => {
            window.location.href = "/sliders";
        }, 3000);
    } catch (error) {
        console.log(error);
    }
};

const detailSlider = async (id, access_token, cb) => {
    try {
        let findSlider = await axios({
            method: "GET",
            url: URL + "/" + id,
            headers: {
                auth: access_token,
                "content-type": "multipart/form-data",
            },
        });

        cb(findSlider.data.data);
    } catch (error) {
        console.log(error);
    }
};

export { getSliders, addSlider, editSlider, removeSlider, detailSlider };
