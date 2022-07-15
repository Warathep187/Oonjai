import React from "react";
import { ChatDotsFill } from "react-bootstrap-icons";
import moment from "moment";
import Link from "next/link";
import { Alert } from "react-bootstrap";

const SomeoneAnswerAlert = ({ notification }) => {
    return (
        <Link href={`/questions/${notification.question_id}`}>
            <Alert variant="secondary" className="px-3 py-2 my-1 rounded border" role="button">
                <div>
                    <h5>
                        <ChatDotsFill /> มีผู้ใช้ตอบกลับคำถามของคุณ{" "}
                        <b>
                            {notification.title.length > 64
                                ? notification.title.substring(0, 64) + "..."
                                : notification.title}
                        </b>
                    </h5>
                </div>
                <div className="text-end">
                    <span className="text-muted">{moment(notification.created_at).fromNow()}</span>
                </div>
            </Alert>
        </Link>
    );
};

export default SomeoneAnswerAlert;
