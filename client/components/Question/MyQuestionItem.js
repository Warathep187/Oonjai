import React from "react";
import Link from "next/link";
import moment from "moment";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";

const MyQuestionItem = ({ question }) => {
    return (
        <div className="p-2 my-1 bg-light border rounded">
            <div className="d-flex justify-content-between align-items-center">
                <div className="text-break">
                    <Link href={`/questions/${question.question_id}`}>
                        <h5 role="button" className="text-primary">
                            {question.title}
                        </h5>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <Link href={`/questions/edit/${question.question_id}`}>
                        <PencilSquare
                            style={{
                                fontSize: "25px",
                                cursor: "pointer",
                            }}
                        />
                    </Link>
                    <Trash3
                        style={{
                            fontSize: "25px",
                            marginLeft: "4px",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>
            <div>
                <span>
                    {question.content.length > 256 ? question.content.substring(0, 256) + "..." : question.content}
                </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <span
                    className="badge bg-warning px-2"
                >
                    {question.topic}
                </span>
                <span className="text-muted">{moment(question.created_at).format("DD/MM/yyyy HH:mm")}</span>
            </div>
        </div>
    );
};

export default MyQuestionItem;
