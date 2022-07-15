import React from "react";
import Link from "next/link";
import { ChatLeftTextFill } from "react-bootstrap-icons";
import moment from "moment";

const Questions = ({ questions }) => {
    return (
        <div>
            {questions.map((question) => (
                <Link href={`/questions/${question.question_id}`}>
                    <div className="latest-question-item border rounded p-2 my-1 position-relative" role="button">
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                        >
                            {question.topic}
                        </span>
                        <div>
                            <h6>{question.title}</h6>
                        </div>
                        <div>
                            <span>
                                {question.content.length > 128
                                    ? question.content.substring(0, 128) + "..."
                                    : question.content}
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src={question.profileImageUrl}
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>{question.username}</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">{question.answers}</span>
                            </div>
                            <div>
                                <span className="text-muted">{moment(question.created_at).fromNow()}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Questions;
