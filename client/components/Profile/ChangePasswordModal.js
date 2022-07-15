import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ChangePasswordModal = ({ isChangePassword, onCloseChangePasswordModalHandler }) => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const changePasswordHandler = async (e) => {
        e.preventDefault();
        try {
            alert(password + confirm);
            onCloseChangePasswordModalHandler();
        } catch (e) {
            toast.error("Error");
        }
    };

    return (
        <Modal show={isChangePassword} onHide={onCloseChangePasswordModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={changePasswordHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="New password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirm(e.target.value)}
                            value={confirm}
                        />
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="secondary" className="me-2" onClick={onCloseChangePasswordModalHandler}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Change
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ChangePasswordModal;
