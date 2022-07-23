import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import DoctorItem from "../../components/Doctor/DoctorItem";
import DoctorProfile from "../../components/Doctor/DoctorProfile";
import AddDoctorModal from "../../components/Doctor/AddDoctorModal";

const DUMMY_DOCTORS = [
    {
        userId: 1,
        email: "XX@gmail.com",
        username: "หมอหมา",
        profileImageUrl: `/backgrounds/background.jpg`,
        created_at: new Date(),
    },
    {
        userId: 2,
        email: "XXxxxx@gmail.com",
        username: "หมอปีเตอร์แพน",
        profileImageUrl: `/backgrounds/background.jpg`,
        created_at: new Date(),
    },
    {
        userId: 3,
        email: "sdsd@gmail.com",
        username: "Warathep",
        profileImageUrl: `/backgrounds/background.jpg`,
        created_at: new Date(),
    },
    {
        userId: 4,
        email: "XasdasdX@gmail.com",
        username: "Warathep",
        profileImageUrl: `/backgrounds/background.jpg`,
        created_at: new Date(),
    },
];

const AdminDoctorManagementPage = () => {
    const [doctors, setDoctors] = useState(DUMMY_DOCTORS);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [keyword, setKeyword] = useState("");
    const [isShowAddDoctorModal, setIsShowAddDoctorModal] = useState(false);

    const searchHandler = (e) => {
        e.preventDefault();
        try {
            alert(keyword);
        } catch (e) {}
    };

    const showAddDoctorModal = () => {
        setIsShowAddDoctorModal(true);
    }

    const closeAddDoctorModal = () => {
        setIsShowAddDoctorModal(false);
    }

    return (
        <Container>
            <AddDoctorModal isShowAddDoctorModal={isShowAddDoctorModal} onCloseAddDoctorModal={closeAddDoctorModal} />
            <div className="d-flex w-100">
                <div
                    className="bg-light rounded-3 p-3"
                    style={{
                        width: "60%",
                        height: "35.5rem",
                        overflowY: "scroll",
                    }}
                >
                    <div className="d-flex align-items-center justify-content-between">
                        <h2>จัดการแพทย์</h2>
                        <div className="d-flex align-items-center">
                            <Form onSubmit={searchHandler}>
                                <Form.Control
                                    type="text"
                                    placeholder="Find doctors.."
                                    style={{
                                        borderRadius: "20px",
                                    }}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    value={keyword}
                                />
                            </Form>
                            <button className="btn btn-outline-primary ms-2" onClick={showAddDoctorModal}>Add doctor</button>
                        </div>
                    </div>
                    <hr />
                    <div className="px-2 mb-2">
                        {doctors.map((doctor) => (
                            <DoctorItem doctor={doctor} key={doctors.userId} onSetSelectedDoctor={setSelectedDoctor} />
                        ))}
                    </div>
                </div>
                <div
                    className="ms-3 bg-light rounded-3 px-1 py-3"
                    style={{
                        width: "40%",
                        height: "24.5rem",
                    }}
                >
                    {selectedDoctor ? (
                        <DoctorProfile doctor={selectedDoctor} />
                    ) : (
                        <div className="w-100 text-center">
                            <span>-- โปรดเลือกแพทย์ --</span>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default AdminDoctorManagementPage;
