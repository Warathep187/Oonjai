import moment from "moment";
import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";

const Answer = ({ answer }) => {
    return (
        <div className="my-1 rounded border p-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <img
                        src={`/profile-icons/${answer.username.charAt(0).toLowerCase()}.png`}
                        style={{
                            width: "35px",
                            height: "35px",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                    />
                    <span className="ms-1">{answer.username}</span>
                    {answer.role === "doctor" && <CheckCircleFill className="ms-1" style={{color: "green"}} />}
                </div>
                <div>
                    <span className="text-muted">{moment(answer.created_at).fromNow()}</span>
                </div>
            </div>
            <div className="px-3 mt-2">
                <span>{answer.content}</span>
            </div>
        </div>
    );
};

export default Answer;
