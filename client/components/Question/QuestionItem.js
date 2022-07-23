import Link from "next/link";
import { ChatLeftTextFill, CheckCircle, XSquareFill } from "react-bootstrap-icons";
import moment from "moment";

const QuestionItem = ({ question, isDoctor, isAdmin, onDeleteQuestionHandler }) => {
    return (
        <div className="latest-question-item border rounded p-2 my-1 position-relative">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                }}
            >
                <span className="badge bg-warning px-2">{question.topic}</span>
                {isAdmin && (
                    <XSquareFill
                        style={{
                            color: "red",
                            fontSize: "21px",
                            cursor: "pointer"
                        }}
                        onClick={() => onDeleteQuestionHandler(question.question_id)}
                    />
                )}
            </div>
            <div role="button">
                <Link
                    href={
                        isDoctor
                            ? `/doctor/questions/${question.question_id}`
                            : isAdmin
                            ? `/admin/questions/${question.question_id}`
                            : `/questions/${question.question_id}`
                    }
                >
                    <h5 className="admin-question-item d-flex">{question.title.length > 64 ? question.title.substring(0, 64) + "..." : question.title}</h5>
                </Link>
            </div>
            <div>
                <span>
                    {question.content.length > 128 ? question.content.substring(0, 128) + "..." : question.content}
                </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="d-flex align-items-center">
                    <img
                        src={question.profileImageUrl}
                        style={{
                            width: "32px",
                            borderRadius: "50%",
                        }}
                    />
                    <span className="ms-1">{question.username}</span>
                </div>
                <div className="d-flex align-items-center">
                    <ChatLeftTextFill />
                    <span className="mx-1">{question.answers}</span>
                    {question.isAnsweredByDoctor && (
                        <CheckCircle style={{ color: "green", fontSize: "25px" }} title="ได้รับการตอบกลับโดยแพทย์" />
                    )}
                </div>
                <div>
                    <span className="text-muted">{moment(question.created_at).fromNow()}</span>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;
