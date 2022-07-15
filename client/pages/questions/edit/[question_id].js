import { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const EditQuestionPage = () => {
    const [topics, setTopics] = useState([
        {
            topic_id: 1,
            topic: "AAAA",
        },
        {
            topic_id: 2,
            topic: "XXX",
        },
        {
            topic_id: 3,
            topic: "SS",
        },
        {
            topic_id: 4,
            topic: "EEEE",
        },
    ]);

    return (
        <div className="bg-dark vh-100">
            <Container>
                <div className="mx-5 px-5 bg-light rounded-2 py-3">
                    <h2>แก้ไข</h2>
                    <hr />
                    <div className="px-3">
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows="4" name="content" />
                            </Form.Group>
                            <div className="d-flex">
                                <div className="w-50">
                                    <Form.Group className="mb-2">
                                        <Form.Label>Select topic</Form.Label>
                                        <Form.Select value={"AAAA"}>
                                            {topics.map((topic) => (
                                                <option value={topic.topic_id} key={topic.topic_id}>
                                                    {topic.topic}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="w-50 ms-3">
                                    <Form.Group className="my-2">
                                        <Form.Check type="switch" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="text-end">
                                <Button variant="outline-primary" className="px-5" type="submit">
                                    Edit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EditQuestionPage;
