import { useState } from "react";
import { Modal } from "react-bootstrap";
import DoctorBlogItem from "./DoctorBlogItem";

const DUMMY_BLOGS = [
    {
        blog_id: 1,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        topic: "โรคผิวหนัง",
        created_at: new Date(),
    },
    {
        blog_id: 2,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        topic: "โรคผิวหนัง",
        created_at: new Date(),
    },
    {
        blog_id: 3,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        topic: "โรคผิวหนัง",
        created_at: new Date(),
    },
    {
        blog_id: 4,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        topic: "โรคผิวหนัง",
        created_at: new Date(),
    },
];

const DoctorBlogsModal = ({ isShow, onCloseBlogsModalHandler }) => {
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);

    return (
        <Modal show={isShow} onHide={onCloseBlogsModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Blogs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="px-3">
                    {blogs.map((blog) => (
                        <DoctorBlogItem blog={blog} key={blog.blog_id} />
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DoctorBlogsModal;
