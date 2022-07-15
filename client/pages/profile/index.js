import { useState } from "react";
import { Container, Image, FloatingLabel, Form } from "react-bootstrap";
import ChangePasswordModal from "../../components/Profile/ChangePasswordModal";
import TopicsModal from "../../components/Profile/TopicsModal";

const user = {
    username: "Wave",
};

const topics = [
    {
        topic_id: 3,
        topic: "A-men",
        created_by: 11
    },
    {
        topic_id: 45,
        topic: "B-men",
        created_by: 11
    },
    {
        topic_id: 45,
        topic: "C-men",
        created_by: 22
    },
];

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        email: "",
        username: "",
    });
    const [newUsername, setNewUsername] = useState(userData.username);
    const [isEditing, setIsEditing] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [isShowTopics, setIsShowTopics] = useState(false);

    const openChangePasswordModalHandler = () => {
        setIsChangePassword(true);
    };

    const closeChangePasswordModalHandler = () => {
        setIsChangePassword(false);
    };

    const openTopicsModalHandler = () => {
        setIsShowTopics(true);
    };

    const closeTopicsModalHandler = () => {
        setIsShowTopics(false);
    };

    const removeAttentionHandler = (topicId) => {
        const answer = window.confirm("คุณต้องการที่จะลบTopicนี้ออกไปหรือไม่");
        if(answer) {
            try {

            }catch(e) {

            }
        }
    };

    const updateProfileHandler = () => {
        try {
            
        }catch(e) {

        }finally {
            setIsEditing(false);
        }
    }

    return (
        <Container className="px-5">
            <div className="px-5 py-3">
                <div className="row bg-light rounded-3 p-4 mx-5 mt-3">
                    <div className="col-4 p-4">
                        <div className="w-100 text-center">
                            <Image
                                src={`/profile-icons/${user.username.charAt(0)}.png`}
                                roundedCircle={true}
                                style={{ width: "85%" }}
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="btn btn-outline-warning w-100 mb-2"
                                onClick={() => setIsEditing(true)}
                                disabled={isEditing}
                            >
                                แก้ไขโปรไฟล์
                            </button>
                            <button className="btn btn-outline-danger w-100" onClick={openChangePasswordModalHandler}>
                                เปลี่ยนรหัสผ่าน
                            </button>
                        </div>
                    </div>
                    <div className="col-8 mt-3">
                        <h1>Profile</h1>
                        <hr />
                        <div className="d-flex flex-column justify-content-between">
                            <div>
                                <FloatingLabel label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="Email" disabled />
                                </FloatingLabel>
                                <FloatingLabel label="Username" className="mb-3">
                                    <Form.Control type="text" placeholder="Username" readOnly={!isEditing} />
                                </FloatingLabel>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your attentions</Form.Label>
                                    <div>
                                        {topics.map((topic) => (
                                            <button
                                                className="btn btn-outline-success me-2"
                                                style={{ position: "relative" }}
                                            >
                                                {topic.topic}
                                                <span
                                                    className="badge bg-danger"
                                                    style={{
                                                        position: "absolute",
                                                        right: -10,
                                                        top: -10,
                                                        borderRadius: "50%",
                                                    }}
                                                    onClick={() => removeAttentionHandler(topic.topic_id)}
                                                >
                                                    X
                                                </span>
                                            </button>
                                        ))}
                                        <button className="btn btn-outline-success" onClick={openTopicsModalHandler}>
                                            +
                                        </button>
                                    </div>
                                </Form.Group>
                            </div>
                            {isEditing && (
                                <div className="text-end">
                                    <button className="btn btn-danger me-2" onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary" onClick={updateProfileHandler}>Save</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isChangePassword && (
                <ChangePasswordModal
                    isChangePassword={isChangePassword}
                    onCloseChangePasswordModalHandler={closeChangePasswordModalHandler}
                />
            )}
            {isShowTopics && (
                <TopicsModal isShowTopics={isShowTopics} onCloseTopicModalHandler={closeTopicsModalHandler} />
            )}
        </Container>
    );
};

export default ProfilePage;
