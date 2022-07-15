import { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { ChatLeftTextFill } from "react-bootstrap-icons";

const LatestTopicQuestions = () => {
    const [questions, setQuestions] = useState([
        {
            question_id: 1,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            answers: 4,
            created_at: new Date(),
        },
        {
            question_id: 2,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            answers: 4,
            created_at: new Date(),
        },
        {
            question_id: 3,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            answers: 4,
            created_at: new Date(),
        },
        {
            question_id: 4,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            answers: 4,
            created_at: new Date(),
        },
        {
            question_id: 5,
            title: "Lorem gskfs kfslksfkl kskfklk kslklk lkslkf lkslkkflksdahjfh",
            topic: "โรคหัวใจ",
            answers: 4,
            created_at: new Date(),
        },
    ]);
    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <div className="p-3 border rounded">
            <h5>คำถามล่าสุด</h5>
            {questions.slice(0, isShowMore ? questions.length : 4).map((question) => (
                <Link href={`/questions/12345`} key={question.question_id}>
                    <div
                        className="latest-question-item border rounded pt-3 pb-2 px-3 my-2 position-relative text-break"
                        role="button"
                    >
                        <span
                            className="badge bg-warning px-2"
                            style={{
                                position: "absolute",
                                top: -5,
                                left: 0,
                            }}
                        >
                            {"โรคหัวใจ"}
                        </span>
                        <div>
                            <h5>{question.title}</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
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
            {!isShowMore && questions.length > 4 && (
                <div className="my-2 text-center">
                    <button className="btn btn-warning text-light" onClick={() => setIsShowMore(true)}>Show more</button>
                </div>
            )}
        </div>
    );
};

export default LatestTopicQuestions;
