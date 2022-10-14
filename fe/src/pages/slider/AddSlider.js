import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addSlider } from "../../axios/sliderAxios";
import { MdAddTask, MdCancel } from "react-icons/md";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BsImages } from "react-icons/bs";

const AddSlider = () => {
    const [form, setForm] = useState({
        sliderName: "",
        sliderDescription: "",
        sliderImage: {},
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        addSlider(form, localStorage.access_token);
        navigation("/sliders");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Create a slider for banner in book store
                </h4>
                <p className="medium">Let's create a banner</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="sliderName" className="form-label">
                        Slider Name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <TbShoppingCartDiscount />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    sliderName: e.target.value,
                                })
                            }
                            id="sliderName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="SliderDescription" className="form-label">
                        Slider Description
                    </label>
                    <textarea
                        onChange={(e) =>
                            setForm({
                                ...form,
                                sliderDescription: e.target.value,
                            })
                        }
                        className="form-control"
                        id="SliderDescription"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="sliderImage" className="form-label">
                        Slider Image
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <BsImages />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    sliderImage: e.target.files[0],
                                })
                            }
                            id="sliderImage"
                            type="file"
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <button
                        onClick={() => submitHandler()}
                        className="btn btn-sm btn-primary"
                    >
                        <span className="me-2">
                            <MdAddTask />
                        </span>
                        Submit
                    </button>
                    <Link
                        to="/sliders"
                        className="btn btn-sm btn-outline-danger ms-2"
                    >
                        <span className="me-2">
                            <MdCancel />
                        </span>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddSlider;