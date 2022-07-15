import {useState} from "react";
import { Container } from "react-bootstrap";
import MyBlogItem from "../../components/Blog/MyBlogItem";

const MyBlogsPage = () => {
    const [blogs, setBlogs] = useState([
        {
            blog_id: 1,
            title: "asldald jiasjdi j iajsdij aijdi ",
            created_at: new Date(),
            topic: "โรคกระดอ",
            blogImageUrl: "/backgrounds/background.jpg",
            created_at: new Date()
        },
        {
            blog_id: 2,
            title: "asldald jiasjdi j iajsdij aijdi ",
            created_at: new Date(),
            topic: "โรคกระดอ",
            blogImageUrl: "/backgrounds/background.jpg",
            created_at: new Date()
        },
        {
            blog_id: 3,
            title: "asldald jiasjdi j iajsdij aijdi ",
            created_at: new Date(),
            topic: "โรคกระดอ",
            blogImageUrl: "/backgrounds/background.jpg",
            created_at: new Date()
        },
    ])

    return (
        <Container>
            <div className="bg-light rounded-3 mt-3 px-5 mx-5 py-3" style={{
                height: "35rem",
                overflowY: "scroll"
            }}>
                <h3>บล็อคของฉัน</h3>
                <hr />
                <div className="px-3 mt-2">
                    {blogs.map(blog => (
                        <MyBlogItem blog={blog} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default MyBlogsPage;
