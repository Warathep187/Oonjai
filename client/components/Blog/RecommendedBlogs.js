import Link from "next/link";
import { HeartFill } from "react-bootstrap-icons";

const RecommendedBlogs = ({ blogs }) => {
    return (
        <div className="py-3 px-4">
            <h3>Recommended blogs</h3>
            <hr />
            <div className="row">
                <Link href={`/blogs/12345`}>
                    <div
                        className="recommended-blog-item col-4 bg-light rounded-3 px-0 overflow-hidden border position-relative"
                        role="button"
                    >
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <img
                                src="/backgrounds/background.jpg"
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="text-break p-2">
                            <div>
                                <h5>Lorem ipsum dolor sit amet...</h5>
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolorem...</span>
                            </div>
                            <div className="border-top mt-1 pt-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <HeartFill />
                                    <span className="ms-1">2,444</span>
                                </div>
                                <div>
                                    <span className="text-muted">10 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/blogs/12345`}>
                    <div
                        className="recommended-blog-item col-4 bg-light rounded-3 px-0 overflow-hidden border position-relative"
                        role="button"
                    >
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <img
                                src="/backgrounds/background.jpg"
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="text-break p-2">
                            <div>
                                <h5>Lorem ipsum dolor sit amet...</h5>
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolorem...</span>
                            </div>
                            <div className="border-top mt-1 pt-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <HeartFill />
                                    <span className="ms-1">2,444</span>
                                </div>
                                <div>
                                    <span className="text-muted">10 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/blogs/12345`}>
                    <div
                        className="recommended-blog-item col-4 bg-light rounded-3 px-0 overflow-hidden border position-relative"
                        role="button"
                    >
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                            }}
                        >
                            โรคหัวใจ
                        </span>
                        <div>
                            <img
                                src="/backgrounds/background.jpg"
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="text-break p-2">
                            <div>
                                <h5>Lorem ipsum dolor sit amet...</h5>
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolorem...</span>
                            </div>
                            <div className="border-top mt-1 pt-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <HeartFill />
                                    <span className="ms-1">2,444</span>
                                </div>
                                <div>
                                    <span className="text-muted">10 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default RecommendedBlogs;
