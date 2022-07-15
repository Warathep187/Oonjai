import { useRouter } from "next/router";
import Link from "next/link";
import { ChatLeftTextFill } from "react-bootstrap-icons";

const BottomLatestQuestions = () => {
    const router = useRouter();

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between">
                <h4>หัวข้อสนทนาล่าสุด</h4>
                <button className="btn btn-outline-primary" onClick={() => router.push("/questions/create")}>
                    ถามแพทย์
                </button>
            </div>
            <hr />
            <div className="mt-2">
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2" role="button">
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2" role="button">
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2" role="button">
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`/questions/12345`}>
                    <div className="latest-question-item border rounded p-2" role="button">
                        <div>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                        </div>
                        <div>
                            <span>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequuntur sint
                                consectetur in libero nesciunt.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div>
                                <img
                                    src="/unknown-profile.png"
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span>Username</span>
                            </div>
                            <div>
                                <ChatLeftTextFill />
                                <span className="ms-1">2</span>
                            </div>
                            <div>
                                <span className="text-muted">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BottomLatestQuestions;
