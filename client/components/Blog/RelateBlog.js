import React from "react";
import Link from "next/link";

const RelateBlog = () => {
    return (
        <Link href={`/blogs/4444`}>
            <div className="relate-blog-item my-2 d-flex" role="button">
                <div>
                    <img
                        src="/backgrounds/background.jpg"
                        style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="text-break ms-2 d-flex flex-column">
                    <span className="badge rounded bg-warning">โรคติดหี</span>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
        </Link>
    );
};

export default RelateBlog;
