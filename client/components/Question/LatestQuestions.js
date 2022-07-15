import React from "react";
import Link from "next/link";
import { ChatLeftTextFill } from "react-bootstrap-icons";

const LatestQuestions = ({ questions }) => {
    return (
        <div className="py-3 px-4">
            <h3>Latest questions</h3>
            <hr />
            <div>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2 my-1 position-relative" role="button">
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2 my-1 position-relative" role="button">
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2 my-1 position-relative" role="button">
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LatestQuestions;
