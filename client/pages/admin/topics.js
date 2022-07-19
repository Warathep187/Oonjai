import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import AdminTopicItem from "../../components/Topic/AdminTopicItem";
import AdminCreateTopicModal from "../../components/Topic/AdminCreateTopicModal";
import AdminEditTopicModal from "../../components/Topic/AdminEditTopicModal";

const DUMMY_TOPICS = [
    {
        topic_id: 1,
        topic: "Dog",
    },
    {
        topic_id: 2,
        topic: "Cat",
    },
    {
        topic_id: 3,
        topic: "Zebra",
    },
    {
        topic_id: 4,
        topic: "Dolphin",
    },
    {
        topic_id: 5,
        topic: "Elephant",
    },
    {
        topic_id: 6,
        topic: "Bird",
    },
];

const AdminTopicsPage = () => {
    const [keyword, setKeyword] = useState("");
    const [currentTopics, setCurrentTopics] = useState(DUMMY_TOPICS);
    const [isCreateTopicModalShow, setIsCreateTopicModalShow] = useState(false);
    const [isEditTopicModalShow, setIsEditTopicModalShow] = useState(false);

    const [editingTopic, setEditingTopic] = useState(null);

    useEffect(() => {
        if (keyword.trim() === "") {
            setCurrentTopics(DUMMY_TOPICS);
        } else {
            const filtered = DUMMY_TOPICS.filter((topic) => topic.topic.includes(keyword));
            setCurrentTopics(filtered);
        }
    }, [keyword]);

    const deleteTopicHandler = async (topicId) => {
        const answer = window.confirm("คุณต้องการที่จะลบหัวข้อนี้หรือไม่");
        if (answer) {
            try {
            } catch (e) {}
        }
    };

    const showCreateTopicModal = () => {
        setIsCreateTopicModalShow(true);
    }

    const closeCreateTopicModal = () => {
        setIsCreateTopicModalShow(false);
    }

    const showEditTopicModal = (topicId) => {
        const editingTopic = DUMMY_TOPICS.find(topic => topic.topic_id === topicId);
        setEditingTopic(editingTopic);
        setIsEditTopicModalShow(true);
    }

    const closeEditTopicModal = () => {
        setEditingTopic(null);
        setIsEditTopicModalShow(false);
    }

    return (
        <Container>
            <AdminCreateTopicModal isShow={isCreateTopicModalShow} onCloseCreateTopicModal={closeCreateTopicModal} />
            <AdminEditTopicModal isShow={isEditTopicModalShow} onCloseEditTopicModal={closeEditTopicModal} editingTopic={editingTopic} />
            <div
                className="bg-light rounded-3 mx-5 px-5 py-3 mt-3"
                style={{
                    height: "35rem",
                    overflowY: "scroll",
                }}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <h2>จัดการหัวข้อ</h2>
                    <img
                        src="/create-icon.png"
                        style={{
                            width: "30px",
                            cursor: "pointer"
                        }}
                        title="เพิ่มหัวข้อใหม่"
                        onClick={() => showCreateTopicModal(true)}
                    />
                </div>
                <hr />
                <div className="px-3">
                    <div className="mb-3">
                        <Form>
                            <Form.Control
                                type="text"
                                placeholder="Search topic..."
                                className="w-50 mx-auto"
                                style={{
                                    borderRadius: "30px",
                                }}
                                onChange={(e) => setKeyword(e.target.value)}
                                value={keyword}
                            />
                        </Form>
                    </div>
                    <div>
                        {currentTopics.map((topic) => (
                            <AdminTopicItem
                                topic={topic}
                                key={topic.topic_id}
                                onShowEditTopicHandler={showEditTopicModal}
                                onDeleteTopicHandler={deleteTopicHandler}
                                editingTopic={editingTopic}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AdminTopicsPage;
