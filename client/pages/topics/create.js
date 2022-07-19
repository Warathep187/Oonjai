import { useState } from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import Link from "next/link";

const CreateTopicPage = () => {
    const [topics, setTopics] = useState([
        {
            topic_id: 1,
            topic: "X-men",
            created_by: 11,
        },
        {
            topic_id: 2,
            topic: "x-women",
            created_by: 11,
        },
        {
            topic_id: 3,
            topic: "Y-men",
            created_by: 22,
        },
    ]);
    const [newTopic, setNewTopic] = useState("");

    const createNewTopicHandler = (e) => {
        e.preventDefault();
        try {
            alert(newTopic);
        } catch (e) {}
    };

    const removeTopicHandler = (topicId) => {
        const answer = window.confirm("คุณต้องการที่จะลบTopicที่เลือกหรือไม่");
        if (answer) {
            try {
                alert(topicId);
            } catch (e) {}
        }
    };

    return (
        <Container className="px-5 mt-3">
            <div className="row justify-content-around" style={{
                height: "35rem"
            }}>
                <div className="col-8 bg-light rounded-3 py-3" style={{
                    overflowY: "scroll"
                }}>
                    <h2>Topic ทั้งหมด</h2>
                    <hr className="me-5" />
                    <div className="px-4">
                        <ListGroup>
                            {topics.map((topic, index) => (
                                <ListGroup.Item action variant="light">
                                    <div className="w-100 d-flex justify-content-between align-items-center">
                                        <Link href={`/topics/${topic.topic}`} key={index}>
                                            <span>{topic.topic}</span>
                                        </Link>
                                        {topic.created_by === 11 && (
                                            <div className="d-flex align-items-center">
                                                <PencilSquare role="button" />
                                                <Trash3 role="button" className="ms-1" onClick={() => removeTopicHandler(topic.topic_id)} />
                                            </div>
                                        )}
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </div>
                <div className="col-3 bg-light rounded-3 py-3" style={{ height: "11.5rem" }}>
                    <Form onSubmit={createNewTopicHandler}>
                        <h3>สร้างTopicใหม่</h3>
                        <Form.Control
                            type="text"
                            className="mt-3"
                            onChange={(e) => setNewTopic(e.target.value)}
                            value={newTopic}
                        />
                        <button className="btn btn-outline-primary mt-3 px-4">สร้าง</button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default CreateTopicPage;
