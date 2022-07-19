import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const TopicsModal = ({ isShowTopics, onCloseTopicModalHandler }) => {
    const [topics, setTopics] = useState([
        {
            topic_id: 1,
            topic: "X-men",
        },
        {
            topic_id: 2,
            topic: "x-women",
        },
        {
            topic_id: 3,
            topic: "Y-men",
        },
    ]);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const fetchTopicsHandler = () => {
        try {
        } catch (e) {}
    };

    const selectNewTopicHandler = (topicId, e) => {
        if (!e.target.checked) {
            const filtered = selectedTopics.filter((selectedTopicId) => selectedTopicId !== topicId);
            setSelectedTopics(filtered);
        } else if (e.target.checked && !selectedTopics.find((selectedTopicId) => selectedTopicId === topicId)) {
            setSelectedTopics((prev) => [...prev, topicId]);
        }
    };

    const updateNewTopicHandler = () => {
        if (selectedTopics.length > 0) {
            try {
                console.log(selectedTopics);
            } catch (e) {}
        }
    };

    return (
        <Modal show={isShowTopics} onHide={onCloseTopicModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>เลือกหัวข้อที่สนใจ</Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    height: "25rem",
                    overflowY: "scroll",
                }}
            >
                <div className="py-3">
                    {topics.map((topic, index) => (
                        <div className="d-flex align-items-center border-bottom border-dark pb-1">
                            <Form.Check
                                key={index}
                                type="checkbox"
                                onChange={(e) => selectNewTopicHandler(topic.topic_id, e)}
                                role="button"
                            />
                            <span className="fs-4 ms-2">{topic.topic}</span>
                        </div>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="btn btn-outline-success"
                    onClick={updateNewTopicHandler}
                    disabled={selectedTopics.length === 0}
                >
                    เพิ่มไปยังความสนใจ
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default TopicsModal;
