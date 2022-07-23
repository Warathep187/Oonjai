import { HeartFill, XSquareFill } from "react-bootstrap-icons";
import moment from "moment";
import Link from "next/link";

const AdminAllBlogItem = ({ blog }) => {
    const deleteBlogHandler = () => {
        const answer = window.confirm("คุณต้องการที่จะลบบล็อคนี้หรือไม่");
        if(answer) {

        }
    }

    return (
        <div className="d-flex rounded-2 my-2 p-2 border position-relative overflow-hidden">
            <span
                className="badge bg-warning px-2"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                }}
            >
                {blog.topic}
            </span>
            <XSquareFill
                style={{
                    fontSize: "25px",
                    color: "red",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    cursor: "pointer"
                }}
                onClick={deleteBlogHandler}
            />
            <div>
                <img
                    src={blog.url}
                    style={{
                        width: "220px",
                        height: "150px",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="ms-2 d-flex flex-column justify-content-between w-100">
                <Link href={`/admin/blogs/${blog.blog_id}`}>
                    <div className="admin-blogs-item me-3" role="button">
                        <h5>{blog.title.length > 128 ? blog.title.substring(0, 128) + "..." : blog.title}</h5>
                    </div>
                </Link>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            src={blog.profileImageUrl}
                            style={{
                                width: "30px",
                                height: "30px",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                        <span className="ms-1">{blog.username}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <HeartFill style={{ fontSize: "20px" }} />
                        <span className="ms-1">{blog.likes}</span>
                    </div>
                    <div>
                        <span className="text-muted">{moment(blog.created_at).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAllBlogItem;
