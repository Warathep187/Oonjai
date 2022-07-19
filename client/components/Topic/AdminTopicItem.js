import React from "react";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

const AdminTopicItem = ({ topic, onDeleteTopicHandler, onShowEditTopicHandler }) => {
    return (
        <div className="border border-bottom d-flex align-items-center justify-content-between p-2">
            <div>
                <span className="fs-5">{topic.topic}</span>
            </div>
            <div className="d-flex align-items-center">
                <PencilSquare
                    style={{
                        fontSize: "25px",
                        cursor: "pointer",
                    }}
                    onClick={() => onShowEditTopicHandler(topic.topic_id)}
                />
                <Trash3
                    className="ms-1"
                    style={{
                        fontSize: "25px",
                        cursor: "pointer",
                    }}
                    onClick={() => onDeleteTopicHandler(topic.topic_id)}
                />
            </div>
        </div>
    );
};

export default AdminTopicItem;
