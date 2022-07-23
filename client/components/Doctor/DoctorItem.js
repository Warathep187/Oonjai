import { Trash3 } from "react-bootstrap-icons";

const DoctorItem = ({ doctor, onSetSelectedDoctor }) => {
    const selectDoctorHandler = () => {
        onSetSelectedDoctor(doctor);
    };

    const removeDoctorHandler = () => {
        const answer = window.confirm(`คุณต้องการที่จะลบแพทย์ ${doctor.username} หรือไม่`);
        if(answer) {

        }
    };

    return (
        <div className="d-flex align-items-center justify-content-between border border-bottom p-2">
            <div className="d-flex align-items-center" onClick={selectDoctorHandler} role="button">
                <div>
                    <img
                        src={doctor.profileImageUrl}
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="ms-2">
                    <span>{doctor.username}</span>
                </div>
            </div>
            <div>
                <Trash3 style={{ color: "red", fontSize: "20px" }} role="button" onClick={removeDoctorHandler} />
            </div>
        </div>
    );
};

export default DoctorItem;
