import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const CreateQuestionPage = () => {
    const [enteredData, setEnteredData] = useState({
        title: "",
        content: "",
        selectedTopicId: "",
        allowOnlyDoctor: true,
    });
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
    const [isCreating, setIsCreating] = useState(false);

    const { title, content, selectedTopicId, allowOnlyDoctor } = enteredData;

    const dataChangeHandler = (e) => {
        const { name, value } = e.target;
        setEnteredData({
            ...enteredData,
            [name]: value,
        });
    };

    const fetchTopicsHandler = async () => {
        try {
            setIsCreating(true);
        } catch (e) {
            console.log(e);
        } finally {
            setIsCreating(false);
        }
    };

    useEffect(() => {
        fetchTopicsHandler();
    }, []);

    const createNewQuestionHandler = (e) => {
        e.preventDefault();
        try {
            console.log(enteredData);
        } catch (e) {}
    };

    return (
        <Container>
            <div className="mx-5 px-5 py-3 bg-light rounded-3 mt-3">
                <h1>สร้างคำถามใหม่</h1>
                <hr className="bg-dark" />
                <Form onSubmit={createNewQuestionHandler}>
                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={dataChangeHandler} value={title} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            name="content"
                            onChange={dataChangeHandler}
                            value={content}
                        />
                    </Form.Group>
                    <div className="d-flex">
                        <div className="w-50">
                            <Form.Group className="mb-2">
                                <Form.Label>Select topic</Form.Label>
                                <Form.Select
                                    value={selectedTopicId}
                                    onChange={(e) =>
                                        setEnteredData({
                                            ...enteredData,
                                            selectedTopicId: e.target.value,
                                        })
                                    }
                                >
                                    {topics.map((topic) => (
                                        <option
                                            value={topic.topic_id}
                                            key={topic.topic_id}
                                            onClick={() =>
                                                setEnteredData({
                                                    ...enteredData,
                                                    selectedTopicId: topic.topic_id,
                                                })
                                            }
                                        >
                                            {topic.topic}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="w-50 ms-3">
                            <Form.Group className="my-2">
                                <Form.Check
                                    type="switch"
                                    checked={allowOnlyDoctor}
                                    label={
                                        allowOnlyDoctor
                                            ? "Allow only doctor to answer your question"
                                            : "Allow everyone to answer tour question"
                                    }
                                    onChange={() =>
                                        setEnteredData({
                                            ...enteredData,
                                            allowOnlyDoctor: !allowOnlyDoctor,
                                        })
                                    }
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="text-end">
                        <Button variant="outline-primary" className="px-5" type="submit">
                            {isCreating ? "Creating.." : "Create"}
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default CreateQuestionPage;
