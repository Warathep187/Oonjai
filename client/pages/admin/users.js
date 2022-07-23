import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import UserItem from "../../components/User/UserItem";
import UserProfile from "../../components/User/UserProfile";

const DUMMY_USERS = [
    {
        userId: 1,
        email: "XX@gmail.com",
        username: "Warathep ..",
        profileImageUrl: `/profile-icons/s.png`,
        created_at: new Date(),
        is_verified: true,
    },
    {
        userId: 2,
        email: "XXxxxx@gmail.com",
        username: "parathep ..",
        profileImageUrl: `/profile-icons/f.png`,
        created_at: new Date(),
        is_verified: false,
    },
    {
        userId: 3,
        email: "sdsd@gmail.com",
        username: "xarathep ..",
        profileImageUrl: `/profile-icons/d.png`,
        created_at: new Date(),
        is_verified: true,
    },
    {
        userId: 4,
        email: "XasdasdX@gmail.com",
        username: "Warathep ..",
        profileImageUrl: `/profile-icons/s.png`,
        created_at: new Date(),
        is_verified: false,
    },
];

const AdminUserManagementPage = () => {
    const [users, setUsers] = useState(DUMMY_USERS);
    const [selectedUser, setSelectedUser] = useState(null);
    const [keyword, setKeyword] = useState("");
    const [skip, setSkip] = useState(0);

    const searchHandler = (e) => {
        e.preventDefault();
        try {
            alert(keyword);
        } catch (e) {}
    };

    const fetchMoreUsersHandler = () => {
        const currentSkip = skip + 100;
        try {
            alert(currentSkip);
        }catch(e) {

        }
    }

    return (
        <Container>
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
                        <h2>จัดการผู้ใช้ทั่วไป</h2>
                        <Form onSubmit={searchHandler}>
                            <Form.Control
                                type="text"
                                placeholder="Find users.."
                                style={{
                                    borderRadius: "20px",
                                }}
                                onChange={(e) => setKeyword(e.target.value)}
                                value={keyword}
                            />
                        </Form>
                    </div>
                    <hr />
                    <div className="px-2 mb-2">
                        {users.map((user) => (
                            <UserItem user={user} key={user.userId} onSetSelectedUser={setSelectedUser} />
                        ))}
                    </div>
                    {users.length > (skip === 0 ? 100 : skip) && (
                        <div className="text-center">
                            <button className="btn btn-outline-warning" onClick={fetchMoreUsersHandler}>Show more</button>
                        </div>
                    )}
                </div>
                <div
                    className="ms-3 bg-light rounded-3 px-1 py-3"
                    style={{
                        width: "40%",
                        height: "26.5rem",
                    }}
                >
                    {selectedUser ? (
                        <UserProfile user={selectedUser} />
                    ) : (
                        <div className="w-100 text-center">
                            <span>-- โปรดเลือกผู้ใช้ --</span>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default AdminUserManagementPage;
