import React from "react";
import { Container } from "react-bootstrap";
import QuestionItem from "../../../components/Question/QuestionItem";

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
        answers: 5,
        topic: "โรคหัวใจ",
        isAnsweredByDoctor: true,
        created_at: new Date(),
    },
];

const DoctorHomePage = () => {
    return (
        <Container>
            <div className="mx-5 px-5 rounded-3 bg-light mt-4 pt-3 pb-5">
                <div>
                    <h2>คำถามล่าสุดในหัวข้อที่คุณสนใจ</h2>
                    <hr />
                    <div className="px-3">
                        {DUMMY_QUESTIONS.map(question => (
                            <QuestionItem question={question} isDoctor={true} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DoctorHomePage;
