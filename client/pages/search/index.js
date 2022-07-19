import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Blogs from "../../components/Searching/Blogs";
import Questions from "../../components/Searching/Questions";

const SearchPage = () => {
    const router = useRouter();
    const [relatedBlogs, setRelatedBlogs] = useState([
        {
            blog_id: 1,
            title: "Rkajsdkajskjjf ckkko ckokoksdkks cddd",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            created_at: new Date(),
            likes: 123,
        },
        {
            blog_id: 2,
            title: "Rkajsdkajskjjf ckkko ckokoksdkks cddd",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            created_at: new Date(),
            likes: 123,
        },
        {
            blog_id: 3,
            title: "Rkajsdkajskjjf ckkko ckokoksdkks cddd",
            topic: "โรคหัวใจ",
            url: "/backgrounds/background.jpg",
            created_at: new Date(),
            likes: 123,
        },
    ]);
    const [relatedQuestions, setRelatedQuestions] = useState([
        {
            question_id: 1,
            title: "askdlasi ifi oof oogkfkg fkdlfklkl fdllfkdkfkl fmvmdfkdf kfkldlfdklfk fdlfkldklfdf",
            content:
                "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus totam sed laborum fugiat ducimus nemo odit atque et laudantium. Ratione commodi et architecto, maxime magnam suscipit provident cupiditate aperiam neque. Quam quod vel ad nam soluta modi unde repellendus, dolorem consequuntur mollitia. Numquam placeat id quae repellendus, totam aliquam hic ea laboriosam harum voluptatem commodi, facere est deleniti ratione ullam animi, porro ipsam dicta doloribus sit praesentium! Eius similique fuga ex voluptate voluptatum architecto nihil libero. Vitae unde omnis blanditiis laudantium ad, numquam repellat dolorum totam veniam sint porro dicta! Vel incidunt quis molestias nemo ullam! Accusamus, provident. Ullam.",
            username: "Warathep",
            profileImageUrl: "/unknown-profile.png",
            answers: 3,
            topic: "โรคหัวใจ",
            created_at: new Date(),
        },
        {
            question_id: 2,
            title: "askdlasi ifi oof oogkfkg fkdlfklkl fdllfkdkfkl fmvmdfkdf kfkldlfdklfk fdlfkldklfdf",
            content:
                "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus totam sed laborum fugiat ducimus nemo odit atque et laudantium. Ratione commodi et architecto, maxime magnam suscipit provident cupiditate aperiam neque. Quam quod vel ad nam soluta modi unde repellendus, dolorem consequuntur mollitia. Numquam placeat id quae repellendus, totam aliquam hic ea laboriosam harum voluptatem commodi, facere est deleniti ratione ullam animi, porro ipsam dicta doloribus sit praesentium! Eius similique fuga ex voluptate voluptatum architecto nihil libero. Vitae unde omnis blanditiis laudantium ad, numquam repellat dolorum totam veniam sint porro dicta! Vel incidunt quis molestias nemo ullam! Accusamus, provident. Ullam.",
            username: "Warathep",
            profileImageUrl: "/unknown-profile.png",
            answers: 3,
            topic: "โรคหัวใจ",
            created_at: new Date(),
        },
        {
            question_id: 3,
            title: "askdlasi ifi oof oogkfkg fkdlfklkl fdllfkdkfkl fmvmdfkdf kfkldlfdklfk fdlfkldklfdf",
            content:
                "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus totam sed laborum fugiat ducimus nemo odit atque et laudantium. Ratione commodi et architecto, maxime magnam suscipit provident cupiditate aperiam neque. Quam quod vel ad nam soluta modi unde repellendus, dolorem consequuntur mollitia. Numquam placeat id quae repellendus, totam aliquam hic ea laboriosam harum voluptatem commodi, facere est deleniti ratione ullam animi, porro ipsam dicta doloribus sit praesentium! Eius similique fuga ex voluptate voluptatum architecto nihil libero. Vitae unde omnis blanditiis laudantium ad, numquam repellat dolorum totam veniam sint porro dicta! Vel incidunt quis molestias nemo ullam! Accusamus, provident. Ullam.",
            username: "Warathep",
            profileImageUrl: "/unknown-profile.png",
            answers: 3,
            topic: "โรคหัวใจ",
            created_at: new Date(),
        },
        {
            question_id: 4,
            title: "askdlasi ifi oof oogkfkg fkdlfklkl fdllfkdkfkl fmvmdfkdf kfkldlfdklfk fdlfkldklfdf",
            content:
                "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus totam sed laborum fugiat ducimus nemo odit atque et laudantium. Ratione commodi et architecto, maxime magnam suscipit provident cupiditate aperiam neque. Quam quod vel ad nam soluta modi unde repellendus, dolorem consequuntur mollitia. Numquam placeat id quae repellendus, totam aliquam hic ea laboriosam harum voluptatem commodi, facere est deleniti ratione ullam animi, porro ipsam dicta doloribus sit praesentium! Eius similique fuga ex voluptate voluptatum architecto nihil libero. Vitae unde omnis blanditiis laudantium ad, numquam repellat dolorum totam veniam sint porro dicta! Vel incidunt quis molestias nemo ullam! Accusamus, provident. Ullam.",
            username: "Warathep",
            profileImageUrl: "/unknown-profile.png",
            answers: 3,
            topic: "โรคหัวใจ",
            created_at: new Date(),
        },
    ]);

    const fetchRelatedBlogsHandler = async (key) => {
        try {
            //const { data } = await axios.get(`http://localhost:8000/search/blogs?key=${key}`);
            //setRelatedBlogs(data.blogs);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchRelatedQuestionsHandler = async (key) => {
        try {
            //const { data } = await axios.get(`http://localhost:8000/search/questions?key=${key}`);
            //setRelatedQuestions(data.questions);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const key = router.query.key;
        if (key) {
            fetchRelatedBlogsHandler(key);
            fetchRelatedQuestionsHandler(key);
        }
    }, [router.query.key]);

    return (
        <Container className="text-light">
            <div
                className="mx-5 px-5 py-3 bg-light rounded-2 text-dark mt-3"
                style={{
                    height: "36rem",
                    overflowY: "scroll",
                }}
            >
                <div className="border rounded p-3 mt-3">
                    <h1 className="fs-4">
                        บล็อคที่เกี่ยวข้องกับ{" "}
                        <b>"{router.query.key ? router.query.key : ""}"</b>
                    </h1>
                    <Blogs blogs={relatedBlogs} />
                </div>
                <div className="border rounded p-3 mt-3">
                    <h1 className="fs-4">
                        คำถามที่เกี่ยวข้องกับ{" "}
                        <b>"{router.query.key ? router.query.key : ""}"</b>
                    </h1>
                    <Questions questions={relatedQuestions} />
                </div>
            </div>
        </Container>
    );
};

export default SearchPage;
