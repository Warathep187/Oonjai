import Link from "next/link";
import { ChatLeftTextFill, CheckCircle } from "react-bootstrap-icons";
import moment from "moment";

const QuestionItem = ({question, isDoctor}) => {
    return (
        <Link href={isDoctor ? `/doctor/questions/${question.question_id}`: `/questions/${question.question_id}`}>
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
                    <h5>{question.title.length > 64 ? question.title.substring(0, 64) + "..." : question.title}</h5>
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
                        {question.isAnsweredByDoctor && <CheckCircle style={{ color: "green", fontSize: "25px" }} title="ได้รับการตอบกลับโดยแพทย์" />}
                    </div>
                    <div>
                        <span className="text-muted">{moment(question.created_at).fromNow()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default QuestionItem;
