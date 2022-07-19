import { Badge, Container } from "react-bootstrap";
import moment from "moment";
import Answers from "../../../components/Answer/Answers";
import Link from "next/link";
import { FloatingLabel, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";

const DoctorQuestionPage = () => {
    const router = useRouter();
    const [questionId, setQuestionId] = useState(null);

    useEffect(() => {
        if(router.query.question_id) {
            setQuestionId(router.query.question_id);
        }
    }, [router.query.question_id])

    return (
        <Container>
            <div className="mt-3 mx-5 px-5 py-3 bg-light rounded-3 position-relative">
                <Badge
                    pill
                    bg="warning"
                    style={{
                        position: "absolute",
                        left: -12,
                        top: -12,
                    }}
                    className="px-3 py-2"
                >
                    <Link href={`/topics/${"โรคหัวใจ"}`}>
                        <span role="button">{"โรคหัวใจ"}</span>
                    </Link>
                </Badge>
                <div>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odio.</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum eum reiciendis quos. Labore,
                        nisi cum tempore eveniet amet ipsam doloribus! Tenetur nam quo repellat inventore a repellendus
                        ab. Aut, mollitia. Porro molestias quibusdam nam voluptatem, reprehenderit quae, minima,
                        aspernatur neque quas vel maiores rem deleniti nisi quis dicta unde aliquid esse illum nemo
                        similique distinctio tempore quidem molestiae. Nulla incidunt facere aliquid et placeat eveniet
                        a molestiae cupiditate alias nam! Iste quis adipisci, veritatis praesentium fuga commodi optio
                        accusantium culpa consequatur laboriosam eum nam laborum autem accusamus aut delectus aliquid
                        aperiam iure officiis voluptates quaerat doloremque exercitationem nisi. Labore!
                    </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img
                            src="/unknown-profile.png"
                            style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                        <span className="ms-1">USERNAME</span>
                    </div>
                    <div>
                        <span className="text-muted">{moment(new Date()).format("DD/MM/yyyy HH:mm")}</span>
                    </div>
                </div>
                <div className="my-3 w-50">
                    <FloatingLabel controlId="floatingTextarea" label="คำตอบของคุณ">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "80px" }} />
                    </FloatingLabel>
                    <div className="text-end">
                        <button className="btn btn-outline-primary mt-2">ตอบคำถาม</button>
                    </div>
                </div>
                {
                    questionId && <Answers questionId={questionId} />
                }
            </div>
        </Container>
    );
};

export default DoctorQuestionPage;
