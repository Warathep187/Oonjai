import moment from "moment";
import {useState} from "react";
import { CheckCircleFill, Trash3, PencilSquare } from "react-bootstrap-icons";
import EditAnswerModal from "./EditAnswerModal";

const Answer = ({ answer, isAdmin }) => {
    const [isShow, setIsShow] = useState(false);

    const adminDeleteAnswerHandler = () => {
        const answer = window.confirm("คุณต้องการจะลบคำตอบนี้หรือไม่");
        if (answer) {
        }
    };

    const userDeleteAnswerHandler = () => {
        const answer = window.confirm("คุณต้องการจะลบคำตอบนี้หรือไม่");
        if (answer) {
        }
    };

    const userEditAnswerHandler = (e, newAnswer) => {
        e.preventDefault();
        alert(newAnswer);
    };

    return (
        <div className="my-1 rounded border py-2 px-2 position-relative">
            <EditAnswerModal isShow={isShow} onCloseModalHandler={setIsShow} onUserEditAnswerHandler={userEditAnswerHandler} oldContent={answer.content} />
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
                    {answer.role === "doctor" && <CheckCircleFill className="ms-1" style={{ color: "green" }} />}
                </div>
                {(isAdmin || answer.userId === 222) && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {answer.userId === 222 && (
                            <PencilSquare
                                style={{
                                    fontSize: "25px",
                                    cursor: "pointer",
                                    marginRight: "2px"
                                }}
                                onClick={() => setIsShow(true)}
                            />
                        )}
                        <Trash3
                            style={{
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                            }}
                            onClick={isAdmin ? adminDeleteAnswerHandler : userDeleteAnswerHandler}
                        />
                    </div>
                )}
            </div>
            <div className="px-3 mt-2">
                <span>{answer.content}</span>
            </div>
            <div className="ms-3 mt-2">
                <span className="text-muted">{moment(answer.created_at).fromNow()}</span>
            </div>
        </div>
    );
};

export default Answer;
