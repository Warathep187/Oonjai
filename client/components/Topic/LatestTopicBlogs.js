import Link from "next/link";
import { HeartFill } from "react-bootstrap-icons";
import { useState } from "react";
import moment from "moment";

const LatestTopicBlogs = () => {
    const [blogs, setBlogs] = useState([
        {
            blog_id: 1,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
        {
            blog_id: 1,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
        {
            blog_id: 2,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
        {
            blog_id: 3,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
        {
            blog_id: 4,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
        {
            blog_id: 5,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            likes: 1000,
        },
    ]);
    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <div className="p-3 border rounded">
            <h5>บล็อคล่าสุด</h5>
            {blogs.slice(0, isShowMore ? blogs.length : 4).map((blog) => (
                <Link href={`/blogs/${blog.blog_id}`}>
                    <div className="latest-blog-item d-flex border my-1 p-2 position-relative" role="button">
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        >
                            {"โรคหัวใจ"}
                        </span>
                        <div>
                            <img
                                src="/backgrounds/background.jpg"
                                className="rounded"
                                style={{
                                    height: "120px",
                                    width: "180px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="ms-2 d-flex flex-column justify-content-between w-100 text-break">
                            <div>
                                <h5>{blog.title}</h5>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <HeartFill />
                                    <span className="ms-1">{blog.likes}</span>
                                </div>
                                <div>
                                    <span className="text-muted">{moment(blog.created_at).fromNow()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            {blogs.length > 4 && !isShowMore && (
                <div className="text-center my-2">
                    <button className="btn btn-warning text-light" onClick={() => setIsShowMore(true)}>
                        Show more
                    </button>
                </div>
            )}
        </div>
    );
};

export default LatestTopicBlogs;
