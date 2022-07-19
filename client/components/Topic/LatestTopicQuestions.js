import { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { ChatLeftTextFill } from "react-bootstrap-icons";
import QuestionItem from "../Question/QuestionItem";

const LatestTopicQuestions = () => {
    const [questions, setQuestions] = useState([
        {
            question_id: 1,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 2,
            topic: "โรคติดหี",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
        {
            question_id: 2,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 2,
            topic: "โรคผิวหนัง",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
        {
            question_id: 3,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 4,
            topic: "โรคติดหี",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
        {
            question_id: 4,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 2,
            topic: "โรคติดหี",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
        {
            question_id: 5,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 2,
            topic: "โรคติดหี",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
        {
            question_id: 6,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
            username: "Warathep",
            profileImageUrl: "/profile-icons/w.png",
            answers: 2,
            topic: "โรคติดหี",
            isAnsweredByDoctor: false,
            created_at: new Date(),
        },
    ]);
    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <div className="p-3 border rounded">
            <h5>คำถามล่าสุด</h5>
            {questions.slice(0, isShowMore ? questions.length : 4).map((question) => (
                <QuestionItem question={question} />
            ))}
            {!isShowMore && questions.length > 4 && (
                <div className="my-2 text-center">
                    <button className="btn btn-warning text-light" onClick={() => setIsShowMore(true)}>
                        Show more
                    </button>
                </div>
            )}
        </div>
    );
};

export default LatestTopicQuestions;
