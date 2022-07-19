import { useState } from "react";
import DoctorAnswerAlert from "../components/Notification/DoctorAnswerAlert";
import SomeoneAnswerAlert from "../components/Notification/SomeoneAnswerAlert";
import BlogAlert from "../components/Notification/BlogAlert";
import QuestionAlert from "../components/Notification/QuestionAlert";
import { Container } from "react-bootstrap";

const DUMMY_NOTIFICATIONS = [
    {
        notification_id: 1,
        type: "blog",
        blog_id: 1,
        topic: "โรคหัวใจ",
        created_at: new Date(),
    },
    {
        notification_id: 2,
        type: "question",
        question_id: 100,
        created_at: new Date(),
        topic: "โรคหัวใจ",
        title: "Hello Hell Hello Hello xxxxxx",
    },
    {
        notification_id: 3,
        type: "answer:doctor",
        question_id: 101,
        created_at: new Date(),
        title: "Hello Hell Hello Hello",
    },
    {
        notification_id: 4,
        type: "blog",
        blog_id: 2,
        topic: "โรคหัวใจ",
        created_at: new Date(),
    },
    {
        notification_id: 3,
        type: "answer:general",
        question_id: 101,
        created_at: new Date(),
        title: "Hello Hell Hello Hello",
    },
];

const NotificationsPage = () => {
    const [newQuestionNotifications, setNewQuestionNotifications] = useState(
        DUMMY_NOTIFICATIONS.filter((notification) => notification.type === "question")
    );
    const [newDoctorAnswerNotifications, setNewDoctorAnswerNotifications] = useState(
        DUMMY_NOTIFICATIONS.filter((notification) => notification.type === "answer:doctor")
    );
    const [newGeneralAnswerNotifications, setNewGeneralAnswerNotifications] = useState(
        DUMMY_NOTIFICATIONS.filter((notification) => notification.type === "answer:general")
    );
    const [newBlogNotifications, setNewBlogNotifications] = useState(
        DUMMY_NOTIFICATIONS.filter((notification) => notification.type === "blog")
    );

    return (
        <Container className="px-5 mt-3 pb-3">
            <div
                className="mx-5 bg-light rounded-3 p-3"
            >
                <h3>Notifications</h3>
                <hr />
                <div className="px-4 py-2">
                    <div className="border rounded-3 mb-3 px-3 py-2">
                        <h5 className="text-muted">New blogs</h5>
                        <hr />
                        <div>
                            {newBlogNotifications.map((notification) => (
                                <BlogAlert notification={notification} key={notification.notification_id} />
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-3 mb-3 px-3 py-2">
                        <h5 className="text-muted">New questions</h5>
                        <hr />
                        <div>
                            {newQuestionNotifications.map((notification) => (
                                <QuestionAlert notification={notification} key={notification.notification_id} />
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-3 mb-3 px-3 py-2">
                        <h5 className="text-muted">New doctor's answers</h5>
                        <hr />
                        <div>
                            {newDoctorAnswerNotifications.map((notification) => (
                                <DoctorAnswerAlert notification={notification} key={notification.notification_id} />
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-3 mb-3 px-3 py-2">
                        <h5 className="text-muted">New general user's answers</h5>
                        <hr />
                        <div>
                            {newGeneralAnswerNotifications.map((notification) => (
                                <SomeoneAnswerAlert notification={notification} key={notification.notification_id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NotificationsPage;
