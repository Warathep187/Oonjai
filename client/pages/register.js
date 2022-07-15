import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const submitHandler = async (e) => {
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
                    {/* <img src="/backgrounds/register.webp" style={{ width: "100%", height: "30rem" }} /> */}
                </div>
                <div className="w-50 h-100 p-4">
                    <h1>Register</h1>
                    <div className="my-4 px-4">
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                            <div className="py-4">
                                <div className="d-flex align-items-center justify-content-end">
                                    <Link href="/login">
                                        <span className="text-primary me-3" role="button">
                                            ← Login page
                                        </span>
                                    </Link>
                                    <Button valiant="outline-primary" type="submit">
                                        Register
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

export default RegisterPage;
