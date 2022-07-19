import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";

const AdminEditTopicModal = ({ isShow, onCloseEditTopicModal, editingTopic }) => {
    const [topic, setTopic] = useState("");
    const addTopicHandler = (e) => {
        e.preventDefault();
        try {
            onCloseEditTopicModal();
            alert(editingTopic.topic_id, topic)
        } catch (e) {

        }
    };

    useEffect(() => {
        if(editingTopic) {
            setTopic(editingTopic.topic)
        }
    }, [editingTopic])

    return (
        <Modal show={isShow} onHide={onCloseEditTopicModal}>
            <Modal.Header closeButton>
                <Modal.Title>แก้ไข</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-3">
                <Form onSubmit={addTopicHandler}>
                    <div className="px-3">
                        <FloatingLabel controlId="floatingInput" label="Topic" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter new topic"
                                onChange={(e) => setTopic(e.target.value)}
                                value={topic}
                            />
                        </FloatingLabel>
                    </div>
                    <div className="mt-3 text-end">
                        <Button variant="secondary me-2" onClick={onCloseEditTopicModal}>
                            ยกเลิก
                        </Button>
                        <Button variant="primary" className="px-4" type="submit">
                            แก้ไข
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AdminEditTopicModal;
