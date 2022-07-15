import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const VerificationPage = () => {
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (router.query.token) {
            setToken(router.query.token);
        }
    }, [router.query.token]);

    return (
        <div className="bg-dark vh-100">
            <div
                style={{
                    width: "23rem",
                    height: "25rem",
                }}
                className="bg-light rounded-3 mx-auto p-4 d-flex justify-content-between flex-column mt-4"
            >
                <div className="text-break">
                    <h2>Email verification</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis consectetur rem vel ex
                    ipsum quaerat suscipit explicabo expedita facere id temporibus placeat minus beatae! Nesciunt in eum
                    vero pariatur sit sed accusantium odit quae beatae. Autem laborum quasi nisi nesciunt obcaecati, hic
                    eveniet, suscipit molestiae non tempore libero. Distinctio!
                </div>
                <div className="px-3">
                    <Button variant="outline-primary w-100">Verify</Button>
                </div>
            </div>
        </div>
    );
};

export default VerificationPage;
