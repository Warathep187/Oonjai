import React from "react";
import { Hash, ArrowRightCircle } from "react-bootstrap-icons";
import Link from "next/link";
import { ListGroup } from "react-bootstrap";

const RecommendedTopics = ({ topics }) => {
    return (
        <div className="py-3 px-3">
            <h3>Popular topics</h3>
            <hr />
            <ListGroup>
                <Link href={`/topics/โรคหัวใจ`}>
                    <ListGroup.Item action className="d-flex align-items-center my-1" role="button">
                        <Hash />
                        <span className="fs-5">โรคหัวใจ</span>
                    </ListGroup.Item>
                </Link>
                <Link href={`/topics/โรคหัวใจ`}>
                    <ListGroup.Item action className="d-flex align-items-center my-1" role="button">
                        <Hash />
                        <span className="fs-5">โรคหัวใจ</span>
                    </ListGroup.Item>
                </Link>
                <Link href={`/topics/โรคหัวใจ`}>
                    <ListGroup.Item action className="d-flex align-items-center my-1" role="button">
                        <Hash />
                        <span className="fs-5">โรคหัวใจ</span>
                    </ListGroup.Item>
                </Link>
                <Link href={`/topics/โรคหัวใจ`}>
                    <ListGroup.Item action className="d-flex align-items-center my-1" role="button">
                        <Hash />
                        <span className="fs-5">โรคหัวใจ</span>
                    </ListGroup.Item>
                </Link>
                <Link href={`/topics/โรคหัวใจ`}>
                    <ListGroup.Item action className="d-flex align-items-center my-1" role="button">
                        <Hash />
                        <span className="fs-5">โรคหัวใจ</span>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
            <div className="text-end">
                <Link href="/topics">
                    <a className="text-primary" role="button">ดูTopicทั้งหมด <ArrowRightCircle /></a>
                </Link>
            </div>
        </div>
    );
};

export default RecommendedTopics;
