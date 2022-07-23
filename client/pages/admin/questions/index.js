import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import QuestionItem from "../../../components/Question/QuestionItem";

const DUMMY_QUESTIONS = [
    {
        question_id: 1,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 2,
        topic: "โรคผิวหนัง",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 2,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 2,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
];

const DUMMY_TOPICS = [
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

const AdminQuestionsManagementPage = () => {
    const [topics, setTopics] = useState(DUMMY_TOPICS);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const deleteQuestionHandler = async (questionId) => {
        const answer = window.confirm("คุณต้องการที่จะลบคำถามนี้หรือไม่?");
        if (answer) {
            try {
            } catch (e) {}
        }
    };

    return (
        <Container>
            <div className="mx-5 px-5 py-3 bg-light rounded-3 mt-3">
                <div className="d-flex align-items-center justify-content-between">
                    <h2>จัดการคำถาม</h2>
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
                <div className="mt-2 px-3">
                    {DUMMY_QUESTIONS.map((question) => (
                        <QuestionItem
                            question={question}
                            key={question.question_id}
                            isAdmin={true}
                            onDeleteQuestionHandler={deleteQuestionHandler}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AdminQuestionsManagementPage;
