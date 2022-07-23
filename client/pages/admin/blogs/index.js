import { Container, Dropdown } from "react-bootstrap";
import AdminAllBlogItem from "../../../components/Blog/AdminAllBlogItem";
import { useState, useEffect } from "react";

const DUMMY_BLOGS = [
    {
        blog_id: 1,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk asd asda sdasdasdsdsdsdds",
        url: "/backgrounds/background.jpg",
        created_at: new Date(),
        likes: 15,
        topic: "โรคกินหมี่",
        username: "หมอปีเตอร์แพน",
        profileImageUrl: "/backgrounds/background.jpg",
        created_at: new Date(),
    },
    {
        blog_id: 2,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        url: "/backgrounds/background.jpg",
        created_at: new Date(),
        likes: 15,
        topic: "โรคกินหมี่",
        username: "หมอปีเตอร์แพน",
        profileImageUrl: "/backgrounds/background.jpg",
        created_at: new Date(),
    },
    {
        blog_id: 3,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        url: "/backgrounds/background.jpg",
        created_at: new Date(),
        likes: 15,
        topic: "โรคกินหมี่",
        username: "หมอปีเตอร์แพน",
        profileImageUrl: "/backgrounds/background.jpg",
        created_at: new Date(),
    },
    {
        blog_id: 4,
        title: "asda io foioa ck kl aklck lkcmm ma m ka sklaks klkalskl klk",
        url: "/backgrounds/background.jpg",
        created_at: new Date(),
        likes: 15,
        topic: "โรคกินหมี่",
        username: "หมอปีเตอร์แพน",
        profileImageUrl: "/backgrounds/background.jpg",
        created_at: new Date(),
    },
];

const DUMMY_TOPIC = [
    {
        topic_id: 1,
        topic: "โรคเรื้อน",
    },
    {
        topic_id: 2,
        topic: "ผิวหนัง",
    },
    {
        topic_id: 3,
        topic: "สุขภาพจิต",
    },
    {
        topic_id: 4,
        topic: "โรคติดหี",
    },
];

const AdminBlogsManagementPage = () => {
    const [topics, setTopics] = useState(DUMMY_TOPIC);
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const fetchTopicsHandler = async () => {};

    const fetchBlogsWithSelectedTopic = async () => {
        if (!selectedTopic) {
        } else {
        }
    };

    useEffect(() => {}, [selectedTopic]);

    return (
        <Container>
            <div className="mt-3 px-5 py-3 mx-5 bg-light rounded-3">
                <div className="d-flex align-items-center justify-content-between">
                    <h2>จัดการบล็อค</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary">
                            {selectedTopic ? selectedTopic : "ทั้งหมด"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {topics.map((topic) => (
                                <Dropdown.Item key={topic.topic_id} onClick={() => setSelectedTopic(topic.topic)}>
                                    {topic.topic}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr />
                <div className="px-3">
                    {blogs.map((blog) => (
                        <AdminAllBlogItem blog={blog} key={blog.blog_id} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AdminBlogsManagementPage;
