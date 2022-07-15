import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Link from "next/link";
import { CardList } from "react-bootstrap-icons";

const DUMMY_TOPICS = [
    {
        topic_id: 1,
        topic: "โรคติดหี",
    },
    {
        topic_id: 2,
        topic: "โรคติดควย",
    },
    {
        topic_id: 3,
        topic: "โรคติดหมา",
    },
    {
        topic_id: 4,
        topic: "โรคติดสัตว์",
    },
];

const TopicsPage = () => {
    const [keyword, setKeyword] = useState("");
    const [topics, setTopics] = useState(DUMMY_TOPICS);

    const searchingHandler = (e) => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        if (keyword.trim() === "") {
            setTopics(DUMMY_TOPICS);
        } else {
            const filtered = DUMMY_TOPICS.filter((topic) => topic.topic.includes(keyword.trim()));
            setTopics(filtered);
        }
    }, [keyword]);

    return (
        <Container>
            <div
                className="bg-light rounded-3 mx-5 px-5 py-3 mt-3"
                style={{
                    height: "36rem",
                    overflowY: "scroll",
                }}
            >
                <h2>All topics</h2>
                <hr />
                <div className="px-5">
                    <Form.Control
                        type="text"
                        className="mx-auto w-50 mb-3"
                        placeholder="Search..."
                        onChange={searchingHandler}
                        value={keyword}
                        style={{
                            borderRadius: "2rem"
                        }}
                    />
                    <div className="row mx-auto">
                        {topics.map((topic) => (
                            <Link href={`/topic/${topic.topic}`}>
                                <div className="col-4 border rounded py-1" style={{
                                    backgroundColor: "white"
                                }}>
                                    <CardList className="me-auto" />
                                    <span role="button" className="ms-1">{topic.topic}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TopicsPage;
