import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LatestTopicBlogs from "../../components/Topic/LatestTopicBlogs";
import {Hash} from "react-bootstrap-icons"
import LatestTopicQuestions from "../../components/Topic/LatestTopicQuestions";

const TopicPage = () => {
    const router = useRouter();
    const [topic, setTopic] = useState("");

    useEffect(() => {
        if (router.query.topic) {
            setTopic(router.query.topic);
        }
    }, [router.query.topic]);

    return (
        <Container>
            <div className="bg-light rounded-3 mx-5 px-5 py-3 mt-3">
                <h3 className="d-flex align-items-center"><Hash />{topic}</h3>
                <hr />
                <div>
                    <LatestTopicBlogs />
                    <br />
                    <LatestTopicQuestions />
                </div>
            </div>
        </Container>
    );
};

export default TopicPage;
