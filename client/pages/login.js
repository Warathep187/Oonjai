import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [enteredData, setEnteredData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = enteredData;

    const enteredDataChangeHandler = (e) => {
        setEnteredData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            toast("Registered");
        } catch (e) {
            toast.error(e.error.response);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div
                className="d-flex align-items-center bg-light mt-4 overflow-hidden"
                style={{
                    width: "60rem",
                    height: "30rem",
                    borderRadius: "8px",
                }}
            >
                <div className="w-50 bg-primary" style={{ height: "30rem" }}>
                    {/* <img src="/backgrounds/login.webp" style={{ width: "100%", height: "30rem" }} /> */}
                </div>
                <div className="w-50 h-100 p-5">
                    <h1>Login</h1>
                    <div className="my-4 px-4">
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={enteredDataChangeHandler}
                                    value={email}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={enteredDataChangeHandler}
                                    value={password}
                                />
                            </Form.Group>
                            <div className="py-4">
                                <div className="d-flex align-items-center justify-content-end">
                                    <Link href="/register">
                                        <span className="text-primary me-3" role="button">
                                            ← Register page
                                        </span>
                                    </Link>
                                    <Button valiant="outline-primary" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
