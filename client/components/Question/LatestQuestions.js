import React from "react";
import QuestionItem from "./QuestionItem";

const DUMMY_QUESTIONS = [
    {
        question_id: 1,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 2,
        topic: "โรคผิวหนัง",
        isAnsweredByDoctor: true,
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
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
    {
        question_id: 3,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint consectetur in libero nesciunt.",
        username: "Warathep",
        profileImageUrl: "/profile-icons/w.png",
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
];

const LatestQuestions = ({ questions }) => {
    return (
        <div className="py-3 px-4">
            <h3>Latest questions</h3>
            <hr />
            <div>
                {DUMMY_QUESTIONS.map((question) => (
                    <QuestionItem question={question} key={question.question_id} />
                ))}
            </div>
        </div>
    );
};

export default LatestQuestions;
