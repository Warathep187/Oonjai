import { Container } from "react-bootstrap";
import moment from "moment";
import Answers from "../../../components/Answer/Answers";

const DUMMY_QUESTION = {
    question_id: 1,
    title: "askdla o d ka klkklkkd klkl ll lld l klk lkakdl klaklkdlaklsda",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, assumenda. Non quo delectus dolorum harum nemo quod recusandae, dolor molestias numquam ipsum totam accusamus aliquam temporibus magni illo dolores esse commodi maiores tempora atque autem tenetur quas! Voluptatibus provident ratione quod, aspernatur tempore excepturi perspiciatis omnis amet dolore, nisi esse.",
    topic: "ครอบครัว",
    username: "ผู้ใช้ปีเตอร์แพน",
    profileImageUrl: "/profile-icons/p.png",
    created_at: new Date()
}

const QuestionPage = () => {
    return (
        <Container>
            <div className="mx-5 px-5 py-4 bg-light rounded-3 position-relative">
                <span className="badge p-2 bg-warning" style={{
                    position: "absolute",
                    left: 0,
                    top: 0
                }}>{DUMMY_QUESTION.topic}</span>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h2>{DUMMY_QUESTION.title}</h2>
                    <button className="btn btn-outline-danger">Delete</button>
                </div>
                <div className="mb-3">
                    <span>{DUMMY_QUESTION.content}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                        <img
                            src={DUMMY_QUESTION.profileImageUrl}
                            style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                        <span className="ms-1">{DUMMY_QUESTION.username}</span>
                    </div>
                    <div>
                        <span className="text-muted">{moment(DUMMY_QUESTION.created_at).format("DD/MM/yyyy HH:mm")}</span>
                    </div>
                </div>
                <div className="px-3">
                    <Answers isAdmin={true} />
                </div>
            </div>
        </Container>
    );
};

export default QuestionPage;
