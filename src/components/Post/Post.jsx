const Post = ({post}) => {
    const {title, body} = post;
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
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Post;