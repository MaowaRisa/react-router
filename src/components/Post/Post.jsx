import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const postStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
    return (
        <div style={postStyle}>
            <h1>Post ID: {id}</h1>
            <h1>{title}</h1>
            <Link to={`/posts/${id}`}>Details</Link>
        </div>
    );
};

export default Post;