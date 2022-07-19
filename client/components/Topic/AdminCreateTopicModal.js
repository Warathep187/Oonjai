import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

const AdminCreateTopicModal = ({ isShow, onCloseCreateTopicModal }) => {
    const [topic, setTopic] = useState("");

    const addTopicHandler = (e) => {
        e.preventDefault();
        try {
            onCloseCreateTopicModal();
        } catch (e) {

        }
    };

    return (
        <Modal show={isShow} onHide={onCloseCreateTopicModal}>
            <Modal.Header closeButton>
                <Modal.Title>เพิ่มTopicใหม่</Modal.Title>
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
                        <Button variant="secondary me-2" onClick={onCloseCreateTopicModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" className="px-4" type="submit">
                            Add
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AdminCreateTopicModal;
