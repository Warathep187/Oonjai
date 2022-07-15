import { useState } from "react";
import { Container } from "react-bootstrap";
import RichTextEditor from "../../../components/Blog/RichTextEditor";

const EditBlogPage = () => {
    const [content, setContent] = useState("");

    const editBlogHandler = (e) => {
        console.log(content);
    };

    return (
        <Container className="pb-5">
            <div className="px-5 mt-3 bg-light rounded-2 mx-5 py-5">
                <h2>แก้ไขบล็อค</h2>
                <hr />
                <div className="mb-2">
                    <span>Title</span>
                    <input type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <span>รูปภาพ</span>
                    <input type="file" className="form-control w-50" accept="image/*" required />
                </div>
                <div className="mb-3">
                    <span>เนื้อหา</span>
                    <RichTextEditor content={content} setContent={setContent} />
                </div>
                <div className="text-end">
                    <button className="btn btn-outline-primary px-5" onClick={editBlogHandler}>
                        Edit
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default EditBlogPage;
