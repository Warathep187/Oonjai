import React from "react";
import { PatchQuestionFill } from "react-bootstrap-icons";
import moment from "moment";
import Link from "next/link";
import { Alert } from "react-bootstrap";

const QuestionAlert = ({ notification }) => {
    return (
        <Link href={`/questions/${notification.question_id}`}>
            <Alert variant="warning" className="px-3 py-2 my-1 rounded border" role="button">
                <div>
                    <h5>
                        <PatchQuestionFill /> มีคำถามใหม่ในหัวข้อ <b>{notification.topic}</b>
                    </h5>
                </div>
                <div className="text-end">
                    <span className="text-muted">{moment(notification.created_at).fromNow()}</span>
                </div>
            </Alert>
        </Link>
    );
};

export default QuestionAlert;
