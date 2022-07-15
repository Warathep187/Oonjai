import React from "react";
import { BodyText } from "react-bootstrap-icons";
import moment from "moment";
import Link from "next/link";
import {Alert} from "react-bootstrap";

function BlogAlert({notification}) {
    return <Link href={`/blogs/${notification.blog_id}`}>
    <Alert variant="primary" className="px-3 py-2 my-1 rounded border" role="button">
        <div>
            <h5>
                <BodyText /> มีBlogใหม่ในหัวข้อ <b>{notification.topic}</b>
            </h5>
        </div>
        <div className="text-end">
            <span className="text-muted">{moment(notification.created_at).fromNow()}</span>
        </div>
    </Alert>
</Link>;
}

export default BlogAlert;
