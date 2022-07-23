import { Form } from "react-bootstrap";
import moment from "moment";
import { useState } from "react";
import DoctorBlogsModal from "./DoctorBlogsModal";

const DoctorProfile = ({doctor}) => {
    const [isShow, setIsShow] = useState(false);

    const openBlogsModalHandler = () => {
        setIsShow(true);
    }

    const closeBlogsModalHandler = () => {
        setIsShow(false);
    }

    return <div className="px-3">
            <DoctorBlogsModal isShow={isShow} onCloseBlogsModalHandler={closeBlogsModalHandler} />
            <div className="text-center">
                <img
                    src={doctor.profileImageUrl}
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div>
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={doctor.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={doctor.username} readOnly />
                </Form.Group>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-outline-primary px-2 py-1" onClick={openBlogsModalHandler}>Show blogs</button>
                <span className="text-muted">{moment(doctor.created_at).format("DD/MM/yyyy HH:mm")}</span>
            </div>
        </div>;
};

export default DoctorProfile;
