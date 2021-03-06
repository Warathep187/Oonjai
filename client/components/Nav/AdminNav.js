import React from "react";
import { Navbar, Nav, Container, Dropdown, SplitButton } from "react-bootstrap";
import Link from "next/link";

const AdminNav = () => {
    const logoutHandler = () => {

    };

    const ProfileComponent = () => (
        <div className="d-flex align-items-center">
            <img src="/admin.webp" style={{ backgroundColor: "white", borderRadius: "50%", width: "35px" }} />
            <span className="text-light text-decoration-none ms-2">ADMIN</span>
        </div>
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/admin/dashboard">
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
                <Nav className="ms-auto">
                    <div className="d-flex align-items-center">
                        <SplitButton variant="dark" title={<ProfileComponent />}>
                            <Dropdown.Item>
                                <Link href="/admin/dashboard">
                                    <span className="text-dark text-decoration-none" role="button">
                                        Dashboard
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/admin/topics">
                                    <span className="text-dark text-decoration-none" role="button">
                                        ??????????????????Topic
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/admin/users">
                                    <span className="text-dark text-decoration-none" role="button">
                                        ??????????????????????????????????????????????????????
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/admin/doctors">
                                    <span className="text-dark text-decoration-none" role="button">
                                        ???????????????????????????
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/admin/blogs">
                                    <span className="text-dark text-decoration-none" role="button">
                                        ?????????????????????????????????
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/admin/questions">
                                    <span className="text-dark text-decoration-none" role="button">
                                        ?????????????????????????????????
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logoutHandler}>
                                <span className="text-dark text-decoration-none" role="button">
                                    ??????????????????????????????
                                </span>
                            </Dropdown.Item>
                        </SplitButton>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AdminNav;
