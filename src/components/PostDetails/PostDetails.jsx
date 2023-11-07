import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body } = post;
    const titleStyle = {
        color: 'red'
    }
    return (
        <div>
            <h1>Post Details of <span style={titleStyle}>{title}</span></h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;