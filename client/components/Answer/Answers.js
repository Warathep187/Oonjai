import { useState } from "react";
import Answer from "./Answer";

const Answers = ({questionId, isAdmin}) => {
    const [answers, setAnswers] = useState([
        {
            answer_id: 1,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab harum, quae eos id hic. Voluptas sed voluptate numquam fugiat et nostrum facere vel magni?",
            userId: 222,
            username: "Warathep",
            role: "doctor",
            created_at: new Date(),
        },
        {
            answer_id: 2,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab harum, quae eos id hic. Voluptas sed voluptate numquam fugiat et nostrum facere vel magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in?",
            userId: 223,
            username: "Waratheeeep",
            role: "patient",
            created_at: new Date(),
        },
        {
            answer_id: 3,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab harum, quae eos id hic. Voluptas sed voluptate numquam fugiat et nostrum facere vel magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in?",
            userId: 224,
            username: "Warathepppp",
            role: "doctor",
            created_at: new Date(),
        },
    ]);

    return (
        <div className="mt-2 bg-light rounded-3 p-3">
            <h4>{answers.length} คำตอบ</h4>
            <hr />
            <div>
                {answers.map((answer) => (
                    <Answer answer={answer} isAdmin={isAdmin} key={answer.answer_id} />
                ))}
            </div>
        </div>
    );
};

export default Answers;
