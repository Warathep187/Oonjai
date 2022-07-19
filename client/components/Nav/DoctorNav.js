import React from "react";
import { Navbar, Nav, Container, Dropdown, SplitButton, Badge } from "react-bootstrap";
import Link from "next/link";
import SearchBar from "../Searching/SearchBar";
import { useSelector } from "react-redux";

const DoctorNav = () => {
    const { username, profileImageUrl, unreadNotifications } = useSelector((state) => state.profileSlice);

    const logoutHandler = () => {};

    const ProfileComponent = ({ username, profileImageUrl }) => (
        <Link href="/profile">
            <div className="d-flex align-items-center">
                <img
                    src={profileImageUrl}
                    style={{ backgroundColor: "white", borderRadius: "50%", width: "35px" }}
                />
                <span
                    className="text-light text-decoration-none ms-2"
                    style={{
                        overflow: "auto",
                        whiteSpace: "nowrap",
                    }}
                >
                    {username + "DOCTOR"}
                </span>
            </div>
        </Link>
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/doctor/home">
                        <div className="d-flex align-items-center" role="button">
                            <img
                                style={{
                                    width: "45px",
                                }}
                                className="me-2"
                                src="/logos/Logo.png"
                            />
                            <span
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                SOME NAME
                            </span>
                        </div>
                    </Link>
                </Navbar.Brand>
                <div className="w-100">
                    <SearchBar />
                </div>
                <Nav className="ms-auto">
                    <div className="d-flex align-items-center">
                        <SplitButton variant="dark" title={<ProfileComponent username={username} profileImageUrl={profileImageUrl} />}>
                            <Dropdown.Item>
                                <Link href="/blogs/create">
                                    <span className="text-dark text-decoration-none" role="button">
                                        สร้างบล็อคใหม่
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/blogs/my-blogs">
                                    <span className="text-dark text-decoration-none" role="button">
                                        บล็อคของฉัน
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/topics/create">
                                    <span className="text-dark text-decoration-none" role="button">
                                        สร้างTopicใหม่
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/notifications">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className="text-dark text-decoration-none" role="button">
                                            การแจ้งเตือน
                                        </span>
                                        <Badge pill bg="danger">
                                            3
                                        </Badge>
                                    </div>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logoutHandler}>
                                <span className="text-dark text-decoration-none" role="button">
                                    ออกจากระบบ
                                </span>
                            </Dropdown.Item>
                        </SplitButton>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default DoctorNav;
