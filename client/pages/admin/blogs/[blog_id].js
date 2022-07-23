import moment from "moment";
import { Container } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

const DUMMY_BLOG = {
    blog_id: 1,
    title: "Lorekjfjj kjakdjk ajsk  jjjaksjjdkjaj jksdajdjkajsdj jjjdj jj jadjskj k",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos a consectetur id, numquam saepe, sunt delectus quae aperiam consequuntur labore, dicta ad voluptate dolorem! Sint, dicta. Quidem porro quasi rerum, accusantium vero doloremque laudantium! Odio cumque impedit sit molestias mollitia iusto consectetur sint nesciunt? Dolore quidem, optio officia sint veritatis quaerat voluptas ducimus voluptatibus libero provident, quis odio praesentium amet placeat. Qui autem enim saepe deleniti ab deserunt aut nobis quae obcaecati, dicta libero nam quos sunt nostrum molestias fugiat rem. Explicabo maxime unde quia. Ad accusantium temporibus beatae qui aperiam at ratione necessitatibus, sunt, consectetur dolorum magni saepe est in, atque odit officiis quod fugiat numquam fugit quia architecto voluptatum? Blanditiis eligendi nemo asperiores totam consectetur eos amet consequatur, eius explicabo molestiae error dolorum id perferendis doloremque ipsa dolor sint perspiciatis quo molestias numquam modi culpa voluptas. Reiciendis vero sit iste laudantium, facilis sed saepe. Beatae velit cumque blanditiis?",
    url: "/backgrounds/background.jpg",
    topic: "สุขภาพจิต",
    username: "หมอปีเตอร์แพน",
    profileImageUrl: "/backgrounds/background.jpg",
    likes: 150,
    created_at: new Date(),
};

const BlogPage = () => {
    const deleteBlogHandler = () => {
        const answer = window.confirm("คุณต้องการที่จะลบบล็อคนี้หรือไม่");
        if(answer) {
            try {

            }catch(e) {
                
            }
        }
    }

    return (
        <Container>
            <div className="mx-5 px-5 mt-3 py-4 bg-light rounded-3 position-relative">
                <span className="badge bg-warning p-2" style={{
                    position: "absolute",
                    top: 0,
                    left: 0
                }}>
                    {DUMMY_BLOG.topic}
                </span>
                <div className="d-flex align-items-center justify-content-between">
                    <h2>{DUMMY_BLOG.title}</h2>
                    <button className="btn btn-outline-danger" onClick={deleteBlogHandler}>Delete</button>
                </div>
                <hr />
                <div className="px-3">
                    <div className="text-center">
                        <img
                            src={DUMMY_BLOG.url}
                            style={{
                                width: "480px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <span>{DUMMY_BLOG.content}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                            <img
                                src={DUMMY_BLOG.profileImageUrl}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                            <span className="ms-1">{DUMMY_BLOG.username}</span>
                        </div>
                        <div>
                            <HeartFill
                                style={{
                                    fontSize: "30px",
                                }}
                            />
                            <span className="ms-1">{DUMMY_BLOG.likes}</span>
                        </div>
                        <div>
                            <span className="text-muted">
                                {moment(DUMMY_BLOG.created_at).format("DD/MM/yyyy HH:mm")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogPage;
