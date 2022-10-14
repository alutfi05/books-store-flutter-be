import React from "react";
import ImageBook from "../images/digital-library-concept-free-vector.jpg";

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 d-flex align-items-center">
                    <div className="text-center">
                        <h2 className="fw-bold">Welcome to Admin Dashboard</h2>
                        <p className="my-4 text-muted">
                            in here you can do, adding, edit, even deleted book,
                            author, publisher. please use your rights wisely
                            ....
                        </p>
                        <p className="text-muted">thank you ....</p>
                    </div>
                </div>
                <div className="col-6">
                    <img
                        src={ImageBook}
                        alt=""
                        style={{ width: "700px", height: "500px" }}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
