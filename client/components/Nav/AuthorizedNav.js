import React from "react";
import { Navbar, Nav, Container, Dropdown, SplitButton, Badge } from "react-bootstrap";
import Link from "next/link";
import SearchBar from "../Searching/SearchBar";

const AuthorizedNav = () => {
    const logoutHandler = () => {};

    const ProfileComponent = () => (
        <Link href="/profile">
            <div className="d-flex align-items-center">
                <img
                    src="/unknown-profile.png"
                    style={{ backgroundColor: "white", borderRadius: "50%", width: "35px" }}
                />
                <span className="text-light text-decoration-none ms-2">USERNAME</span>
            </div>
        </Link>
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/">
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
                        <SplitButton variant="dark" title={<ProfileComponent />}>
                            <Dropdown.Item>
                                <Link href="/questions/create">
                                    <span className="text-dark text-decoration-none" role="button">
                                        สร้างคำถามใหม่
                                    </span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/questions/my-questions">
                                    <span className="text-dark text-decoration-none" role="button">
                                        คำถามของฉัน
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
                                            5
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

export default AuthorizedNav;
