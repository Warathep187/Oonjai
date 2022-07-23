import { useState } from "react";
import { Modal, Form, FloatingLabel } from "react-bootstrap";

const AddDoctorModal = ({ isShowAddDoctorModal, onCloseAddDoctorModal }) => {
    return (
        <Modal show={isShowAddDoctorModal} onHide={onCloseAddDoctorModal}>
            <Modal.Header closeButton>
                <Modal.Title>เพิ่มแพทย์</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="px-3">
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <div className="mb-2">
                            <span>รูปภาพโปรไฟล์</span>
                            <Form.Control type="file" accept="image/*" placeholder="Profile image" />
                        </div>
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-2">
                            <Form.Control type="text" placeholder="Username" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Password" className="mb-2">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Confirm password" className="mb-2">
                            <Form.Control type="password" placeholder="Confirm password" />
                        </FloatingLabel>
                        <div className="text-end">
                            <button className="btn btn-primary px-4">เพิ่ม</button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddDoctorModal;
