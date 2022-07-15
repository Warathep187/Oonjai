import { Container, Badge } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";
import { Heart, HeartFill, ArrowRightCircle } from "react-bootstrap-icons";
import BottomLatestQuestions from "../../components/Blog/BottomLatestQuestions";
import RelateBlog from "../../components/Blog/RelateBlog";

const BLOG = {
    blog_id: 1,
    title: "Lorem ipsum dolor sit amet.",
    content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus cum eveniet fuga quaerat labore architecto consequatur sequi similique consequuntur repellat fugit deserunt optio, impedit, aut dicta dolores, sit cumque! Laudantium minus corporis possimus, praesentium nesciunt natus! Iste, quo laborum?                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas doloremque soluta tenetur ducimus amet, libero officiis, eaque illo unde rem vitae eveniet! Officiis quasi aspernatur minima, est enim cupiditate, accusantium iure quos, neque nam modi? Exercitationem maiores deleniti atque unde labore quo, quidem rem. Earum ea deleniti nesciunt optio voluptatum sapiente velit, facere dolorum quaerat atque eius, totam, consectetur accusamus!                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio ipsa necessitatibus exercitationem minus facilis magnam perspiciatis illo minima, deserunt, mollitia, asperiores perferendis id accusantium suscipit. Porro dolores ipsam pariatur at? Modi dolores tempore, quidem cumque minima vitae voluptas quas, voluptate nemo doloremque reprehenderit, accusantium ratione! Maiores, porro vitae.",
    url: "/backgrounds/background.jpg",
    username: "Warathep",
    profileImageUrl: "/backgrounds/background.jpg",
    topic: "โรคติดหี",
    topic_id: 1,
    created_at: new Date(),
    is_like: true,
};

const BlogPage = () => {
    return (
        <Container>
            <div className="d-flex mt-3 mx-5">
                <div className="w-75 px-5 mb-4 py-3 bg-light rounded-3 position-relative">
                    <Badge
                        pill
                        bg="warning"
                        style={{
                            position: "absolute",
                            left: -12,
                            top: -10,
                        }}
                        className="px-3 py-2"
                    >
                        <Link href={`/topics/${BLOG.topic}`}>
                            <span role="button">{BLOG.topic}</span>
                        </Link>
                    </Badge>
                    <h4>{BLOG.title}</h4>
                    <hr />
                    <div>
                        <div className="w-100 text-center">
                            <img
                                src={BLOG.url}
                                style={{
                                    width: "500px",
                                    height: "300px",
                                    objectFit: "cover",
                                }}
                                className="mx-auto"
                            />
                        </div>
                        <div className="mt-3">{BLOG.content}</div>
                        <hr />
                        <div className="mt-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={BLOG.profileImageUrl}
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span className="ms-1">{BLOG.username}</span>
                            </div>
                            <div>
                                {BLOG.is_like ? (
                                    <HeartFill style={{ fontSize: "25px", cursor: "pointer" }} />
                                ) : (
                                    <Heart style={{ fontSize: "25px", cursor: "pointer" }} />
                                )}
                                <span className="ms-1">1,500</span>
                            </div>
                            <div>
                                <span className="text-muted">{moment(BLOG.created_at).format("DD/MM/yyy HH:mm")}</span>
                            </div>
                        </div>
                    </div>
                    <BottomLatestQuestions />
                </div>
                <div className="w-25 ms-3 mb-4 rounded bg-light py-3 px-2 h-100">
                    <h5>Blogที่เกี่ยวข้อง</h5>
                    <hr />
                    <div>
                        <RelateBlog />
                        <RelateBlog />
                        <RelateBlog />
                        <RelateBlog />
                        <RelateBlog />
                        <div>
                            <Link href={`/topics/โรคติดหี`}>
                                <a className="d-flex align-items-center justify-content-end">
                                    <span>ดูบล็อคเพิ่มเติมในหัวข้อนี้</span>
                                    <ArrowRightCircle className="ms-1" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogPage;
