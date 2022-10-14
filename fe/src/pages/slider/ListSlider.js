import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSliders, removeSlider } from "../../axios/sliderAxios";
import Loading from "../../helpers/Loading";
import { TbDiscount2 } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ListSliders = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        getSliders((result) => setSliders(result));
    }, []);

    const deleteHandler = (id) => {
        removeSlider(id, localStorage.access_token);
    };

    return (
        <>
            <div className="w-100">
                <div className="mt-4 text-center">
                    <Link
                        to="/sliders/add"
                        className="btn btn-sm btn-success mb-4"
                    >
                        <span className="me-2">
                            <TbDiscount2 />
                        </span>
                        Add Slider
                    </Link>
                    <div>
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr className="table-success text-center">
                                    <th scope="col">No</th>
                                    <th scope="col">Slider Name</th>
                                    <th scope="col">Slider Description</th>
                                    <th scope="col">Slider Image</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sliders.length > 0 ? (
                                    sliders.map((slider, index) => {
                                        const {
                                            sliderId,
                                            sliderName,
                                            sliderDescription,
                                            sliderImage,
                                        } = slider;
                                        const displayImage =
                                            "http://localhost:4000" +
                                            sliderImage;
                                        return (
                                            <tr key={sliderId}>
                                                <td>{index + 1}</td>
                                                <td>{sliderName}</td>
                                                <td>{sliderDescription}</td>
                                                <td>
                                                    <img
                                                        src={displayImage}
                                                        alt=""
                                                        style={{
                                                            width: "120px",
                                                            height: "100px",
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/sliders/edit/${sliderId}`}
                                                        className="btn btn-sm me-2 btn-warning"
                                                    >
                                                        <MdModeEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteHandler(
                                                                sliderId
                                                            )
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
                </div>
            </div>
        </>
    );
};

export default ListSliders;
