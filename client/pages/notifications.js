import React from "react";
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
    return (
        <Container className="px-5 mt-3 pb-3">
            <div
                className="mx-5 bg-light rounded-3 p-3"
                style={{
                    height: "35rem",
                    overflowY: "scroll",
                }}
            >
                <h3>Notifications</h3>
                <hr />
                <div className="px-4 py-2">
                    {DUMMY_NOTIFICATIONS.map((notification) => {
                        if (notification.type === "question") {
                            return <QuestionAlert notification={notification} />;
                        } else if (notification.type === "answer:doctor") {
                            return <DoctorAnswerAlert notification={notification} />;
                        } else if(notification.type === "answer:general") {
                            return <SomeoneAnswerAlert notification={notification} />
                        } else if (notification.type === "blog") {
                            return <BlogAlert notification={notification} />;
                        } else {
                            return <div>ERROR</div>;
                        }
                    })}
                </div>
            </div>
        </Container>
    );
};

export default NotificationsPage;
